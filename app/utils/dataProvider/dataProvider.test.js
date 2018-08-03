import { call, put, select } from 'redux-saga/effects';
import noop from 'lodash/noop';

import dataProvider from 'utils/dataProvider/dataProvider';
import loader from 'utils/loader/loader';
import { navigationRoutes, navigationSteps } from 'modules/navigation';
import { actions } from 'modules/application/common';

import * as API_CONTENT from 'api/content/Home/get';

// Mock store from loader
jest.mock('index', () => {
  return {
    store: {
      getState: jest.fn()
    }
  };
});

describe('DataProvider', () => {
  const currentRoute = navigationRoutes[navigationSteps.CONTENT];
  const routeConfig = [currentRoute.key];
  const requestConfig = { throwErrors: true };

  it('handles load method', () => {
    expect(dataProvider.load).toBeDefined();

    const gen = dataProvider.load(routeConfig);

    expect(gen).toBeDefined();

    // SELECT state
    let result = gen.next();

    expect(result.value).toEqual(select());

    // CALL loader
    result = gen.next();
    expect(result.value).toEqual([
      call(loader.request, currentRoute.endpoints.onLoad(), requestConfig)
    ]);

    // PUT normalizeData
    result = gen.next([API_CONTENT]);
    expect(result.value).toEqual(
      put(actions.normalizeData({ key: currentRoute.key }, API_CONTENT))
    );

    // RETURN true
    result = gen.next();
    expect(result.value).toBe(true);
    expect(result.done).toBe(true);
  });

  it('handles load method with error', () => {
    const gen = dataProvider.load(routeConfig);

    Object.defineProperty(window, 'location', { value: '' });
    window.location.assign = jest.fn();

    // SELECT state
    let result = gen.next();

    expect(result.value).toEqual(select());

    // CALL loader
    const state = { common: { history: {} } };

    result = gen.next(state);
    expect(result.value).toEqual([
      call(loader.request, currentRoute.endpoints.onLoad(), requestConfig)
    ]);

    // RETURN false
    result = gen.next();
    expect(result.value).toBe(false);
    expect(result.done).toBe(true);
  });

  it('handles data already loaded', () => {
    const gen = dataProvider.load(routeConfig, undefined, true);

    // SELECT state
    let result = gen.next();

    expect(result.value).toEqual(select());

    // CALL noop
    result = gen.next();
    expect(result.value).toEqual([call(noop)]);
  });
});
