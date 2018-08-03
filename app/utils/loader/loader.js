import axios from 'axios';
import { call, put } from 'redux-saga/effects';
import noop from 'lodash/noop';
import pick from 'lodash/pick';

import { actions } from 'modules/application/common';
import selectors from 'modules/application/selectors';
import { navigationRoutes, navigationSteps } from 'modules/navigation';

import { store } from 'index';

// Set current route
const currentRoute = navigationRoutes[navigationSteps.APPLICATION];

export const defaults = {
  baseURL: '',
  url: '',
  method: 'GET',
  data: undefined,
  timeout: 150000,
  useGlobalSpinner: false,
  hideContentWhileLoading: false,
  clearPageErrors: false,
  showPageLevelError: true,
  throwErrors: false,
  preLoad: noop,
  postLoad: noop,
  enableLogging: false
};

export const requestConfigKeys = [
  'baseURL',
  'url',
  'method',
  'data',
  'params',
  'timeout',
  'headers',
  'withCredentials'
];

export function* preLoad(config) {
  if (config.useGlobalSpinner) {
    yield put(actions.showGlobalSpinner());
  }

  if (config.clearPageErrors) {
    yield put(actions.setPageErrors([]));
  }

  yield call(config.preLoad);
}

export function* postLoad(config) {
  if (config.useGlobalSpinner) {
    yield put(actions.hideGlobalSpinner());
  }

  yield call(config.postLoad);
}

class Loader {
  *request(endpoint, options) {
    const state = store.getState();
    const userCredentials = selectors.getUserCredentials(state);
    const authCredentials = selectors.getAuthCredentials(state);
    const appSettings = selectors.getAppSettings(state);
    const timeout = selectors.getTimeout(state);
    const pingEndpoint = currentRoute.endpoints.ping();
    const loggerEndpoint = appSettings.loggingEndpoint;

    if (process.env.NODE_ENV === 'production') {
      defaults.baseURL = selectors.getBaseApiUrl(state);
      defaults.enableLogging = true;
    }

    if (userCredentials) {
      defaults.headers = {
        Authorization: authCredentials.token,
        'User-GUID': userCredentials.guid,
        'User-Login-ID': userCredentials.loginEmail,
        'SDWAN-Account-Number': userCredentials.accountNumber,
        'SDWAN-User-Data': userCredentials.userToken,
        'Tracking-ID': userCredentials.visitorSessionId
      };
    }

    const config = Object.assign({}, defaults, options, endpoint);
    const requestConfig = Object.assign({}, pick(config, requestConfigKeys));

    let request;
    let response;
    let startTime;

    // Trigger preLoad method
    yield call(preLoad, config);

    if (timeout) {
      const pingConfig = Object.assign({}, requestConfig, pingEndpoint);

      // Remove data payload from request
      delete pingConfig.data;

      try {
        yield call(axios, pingConfig);
        yield put(actions.clearTimeout());
      } catch (error) {
        return;
      }
    }

    yield put(actions.startRequest(requestConfig));

    if (defaults.enableLogging) {
      axios.interceptors.request.use(req => {
        if (req.url !== loggerEndpoint.url) {
          // Store reference to request
          request = req;
        }
        return req;
      });
    }

    try {
      // Make AJAX request with options
      startTime = new Date();
      response = yield call(axios, requestConfig);
    } catch (error) {
      yield put(actions.setError(error.response, options));

      if (config.throwErrors) {
        yield call(postLoad, config);
        throw error.response.data;
      }
    }

    if (userCredentials && defaults.enableLogging) {
      const endTime = new Date();
      const logProperties = {
        url: requestConfig.url,
        tid: userCredentials.visitorSessionId,
        appid: appSettings.applicationId,
        st: startTime,
        et: endTime,
        req: JSON.stringify(request),
        res: JSON.stringify(response)
      };
      const logConfig = Object.assign({}, requestConfig, loggerEndpoint, {
        params: undefined,
        data: {
          events: [
            {
              properties: logProperties
            }
          ]
        }
      });

      // Log request and response
      axios(logConfig).catch(error => error);
    }

    const data = response ? response.data : {};

    // Trigger postLoad method
    yield call(postLoad, config);

    // Return response
    return data;
  }
}

// Export singleton
const instance = new Loader();

export default instance;
