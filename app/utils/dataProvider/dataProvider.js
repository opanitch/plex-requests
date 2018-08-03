import { call, put, select } from 'redux-saga/effects';
import get from 'lodash/get';
import noop from 'lodash/noop';

import { actions } from 'modules/application/common';
import { navigationRoutes } from 'modules/navigation';
import loader from 'utils/loader/loader';

class DataProvider {
  *load(routeConfig, action, loaded = false) {
    const state = yield select();

    try {
      let stateData;
      const endpoints = routeConfig.map(key => {
        stateData = get(state, navigationRoutes[key].state);

        if (!get(stateData, 'loaded.data', false) && !loaded) {
          // Make request for data
          return call(
            loader.request,
            navigationRoutes[key].endpoints.onLoad(),
            { throwErrors: true }
          );
        } else {
          return call(noop);
        }
      });

      const endpointData = yield endpoints;

      for (let i = 0; i < endpointData.length; i++) {
        const meta = {
          key: routeConfig[i],
          action
        };
        const payload = endpointData[i] || stateData;

        yield put(actions.normalizeData(meta, payload));
      }

      return true;
    } catch (error) {
      window.location.assign('/sdwan/ErrorPage?ec=500');
      return false;
    }
  }
}

// Export singleton
const instance = new DataProvider();

export default instance;
