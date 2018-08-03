import axios from 'axios';
import { call, put } from 'redux-saga/effects';
import pick from 'lodash/pick';

import { navigationRoutes, navigationSteps } from 'modules/navigation';

import loader, {
  defaults,
  requestConfigKeys,
  preLoad,
  postLoad
} from 'utils/loader/loader';
import { actions } from 'modules/application/common';

const mockStore = {
  application: {
    cimaAuthUrl: '/oauth/token',
    cimaAuthToken: 'Basic Y29tY2FzdC1idXNpbmVzcy1teWFjY291',
    dataApiBaseUrl: 'http://services.xfinity.com/business-sdwan-data',
    userContext: {
      CustomerGuid: '709016280517072017Comcast.ident',
      LoginEmail: 'singlemetroe@yopmail.com',
      SdWanAccountNumber: '939808426'
    },
    userToken: 'Hello',
    data: {
      timeout: false
    }
  }
};

// Mock store from loader
jest.mock('index', () => {
  return {
    store: {
      getState() {
        return mockStore;
      }
    }
  };
});

describe('Loader', () => {
  // Set current route
  const currentRoute = navigationRoutes[navigationSteps.APPLICATION];

  afterEach(() => {
    delete process.env.NODE_ENV;
    mockStore.application.data.timeout = false;
  });

  it('handles requests', () => {
    const endpoint = {
      url: '/',
      method: 'GET'
    };
    const options = {
      headers: {
        Authorization: 'Basic Y29tY2FzdC1idXNpbmVzcy1teWFjY291',
        'User-GUID': '709016280517072017Comcast.ident',
        'User-Login-ID': 'singlemetroe@yopmail.com',
        'SDWAN-Account-Number': '939808426',
        'SDWAN-User-Data': 'Hello',
        'Tracking-ID': null
      }
    };
    const config = Object.assign({}, defaults, options, endpoint);
    const requestConfig = Object.assign({}, pick(config, requestConfigKeys));

    expect(loader.request).toBeDefined();
    const gen = loader.request(endpoint, options);

    // PreLoad
    let result = gen.next();

    expect(result.value).toEqual(call(preLoad, config));

    // Dispatch startRequest action
    result = gen.next();
    expect(result.value).toEqual(put(actions.startRequest(requestConfig)));

    // Request
    result = gen.next();
    expect(result.value).toEqual(call(axios, requestConfig));

    // PostLoad
    result = gen.next({ data: { message: 'Success!' } });
    expect(result.value).toEqual(call(postLoad, config));

    // Response
    result = gen.next();
    expect(result.value).toEqual({ message: 'Success!' });
    expect(result.done).toBe(true);
  });

  it('handles production requests with data API', () => {
    process.env.NODE_ENV = 'production';
    const endpoint = {
      url: '/',
      method: 'GET'
    };
    const options = {
      headers: {
        Authorization: 'Basic Y29tY2FzdC1idXNpbmVzcy1teWFjY291',
        'User-GUID': '709016280517072017Comcast.ident',
        'User-Login-ID': 'singlemetroe@yopmail.com',
        'SDWAN-Account-Number': '939808426',
        'SDWAN-User-Data': 'Hello',
        'Tracking-ID': null
      }
    };

    defaults.baseURL = 'http://services.xfinity.com/business-sdwan-data';
    defaults.enableLogging = true;
    const config = Object.assign({}, defaults, options, endpoint);
    const requestConfig = Object.assign({}, pick(config, requestConfigKeys));

    const gen = loader.request(endpoint, options);

    // PreLoad
    let result = gen.next();

    expect(result.value).toEqual(call(preLoad, config));

    // Dispatch startRequest action
    result = gen.next();
    expect(result.value).toEqual(put(actions.startRequest(requestConfig)));

    // Request
    result = gen.next();
    expect(result.value).toEqual(call(axios, requestConfig));

    // PostLoad
    result = gen.next({ data: { message: 'Success!' } });
    expect(result.value).toEqual(call(postLoad, config));

    // Response
    result = gen.next();
    expect(result.value).toEqual({ message: 'Success!' });
    expect(result.done).toBe(true);
  });

  it('handles timed out requests with ping API', () => {
    mockStore.application.data.timeout = true;
    const endpoint = {
      url: '/',
      method: 'GET'
    };
    const options = {
      headers: {
        Authorization: 'Basic Y29tY2FzdC1idXNpbmVzcy1teWFjY291',
        'User-GUID': '709016280517072017Comcast.ident',
        'User-Login-ID': 'singlemetroe@yopmail.com',
        'SDWAN-Account-Number': '939808426',
        'SDWAN-User-Data': 'Hello',
        'Tracking-ID': null
      }
    };
    const config = Object.assign({}, defaults, options, endpoint);
    const requestConfig = Object.assign({}, pick(config, requestConfigKeys));
    const gen = loader.request(endpoint, options);
    const pingConfig = Object.assign(
      {},
      requestConfig,
      currentRoute.endpoints.ping()
    );

    // PreLoad
    let result = gen.next();

    // call axios with ping endpoint
    result = gen.next();
    expect(result.value).toEqual(call(axios, pingConfig));

    // put clearTimeout action
    result = gen.next();
    expect(result.value).toEqual(put(actions.clearTimeout()));

    // catches error
    gen.throw(new Error('Request failed'));
    result = gen.next();

    expect(result.done).toBe(true);
    expect(result.value).toBeUndefined();
  });

  it('handles request failures', () => {
    const endpoint = {
      url: '/',
      method: 'GET'
    };
    const options = {};
    const config = Object.assign({}, defaults, options, endpoint);
    const requestConfig = Object.assign({}, pick(config, requestConfigKeys));

    expect(loader.request).toBeDefined();
    const gen = loader.request(endpoint, options);

    // PreLoad
    let result = gen.next();

    // Dispatch startRequest action
    result = gen.next();

    // Request
    result = gen.next();
    expect(result.value).toEqual(call(axios, requestConfig));

    // PostLoad
    const error = new Error('Request failed');

    gen.throw(error);
    result = gen.next();
    expect(JSON.stringify(result.value)).toEqual(
      JSON.stringify(call(config.postLoad, config))
    );
  });

  it('handles request failures and throws error', () => {
    const endpoint = {
      url: '/',
      method: 'GET'
    };
    const options = { throwErrors: true };
    const config = Object.assign({}, defaults, options, endpoint);
    const requestConfig = Object.assign({}, pick(config, requestConfigKeys));

    expect(loader.request).toBeDefined();
    const gen = loader.request(endpoint, options);

    // PreLoad
    let result = gen.next();

    // Dispatch startRequest action
    result = gen.next();

    // Request
    result = gen.next();
    expect(result.value).toEqual(call(axios, requestConfig));

    // Error
    const errorResponse = {
      response: {
        data: {
          error: 'An error occurred'
        }
      }
    };

    gen.throw(errorResponse);
    result = gen.next();
    expect(result.value).toEqual(call(postLoad, config));
    expect(() => gen.next()).toThrow();
  });

  it('handles preLoad method', () => {
    const config = {
      clearPageErrors: true,
      useGlobalSpinner: true,
      preLoad: jest.fn()
    };

    expect(preLoad).toBeDefined();
    const gen = preLoad(config);

    let result = gen.next();

    expect(result.value).toEqual(put(actions.showGlobalSpinner()));

    result = gen.next();
    expect(result.value).toEqual(put(actions.setPageErrors([])));

    result = gen.next();
    expect(result.value).toEqual(call(config.preLoad));
  });

  it('handles preLoad method without options', () => {
    const config = {
      clearPageErrors: false,
      useGlobalSpinner: false,
      preLoad: jest.fn()
    };

    expect(preLoad).toBeDefined();
    const gen = preLoad(config);

    const result = gen.next();

    expect(result.value).toEqual(call(config.preLoad));
  });

  it('handles postLoad method', () => {
    const config = {
      useGlobalSpinner: true,
      postLoad: jest.fn()
    };

    expect(postLoad).toBeDefined();
    const gen = postLoad(config);

    let result = gen.next();

    expect(result.value).toEqual(put(actions.hideGlobalSpinner()));

    result = gen.next();
    expect(result.value).toEqual(call(config.postLoad));
  });

  it('handles postLoad method without options', () => {
    const config = {
      useGlobalSpinner: false,
      postLoad: jest.fn()
    };

    expect(postLoad).toBeDefined();
    const gen = postLoad(config);

    const result = gen.next();

    expect(result.value).toEqual(call(config.postLoad));
  });
});
