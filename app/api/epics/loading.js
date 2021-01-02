import { race } from 'rxjs';
import { filter, map, take, ignoreElements, tap } from 'rxjs/operators';
import { ofType } from 'redux-observable';

import { setSiteError, setSiteLoaded } from '../actions/sessions';
import {
  ERRORS,
  STATE_SLICES,
  TOP_LEVEL_ROUTES,
  ACTION_TYPES
} from '../constants';
import {
  getErrors,
  hasError,
  isLoaded,
  isReadyOrError
} from '../state-helpers';

/**
 * Returns route specific required slices of state
 * @param {Object} state - full state object
 * @returns {Map} of route specific required
 */
function getRouteDataMap(state) {
  const ROUTE_DATA_MAP = new Map();
  const isSecurityEnabled = get(state, 'gateway.advSecurityEnabled', false);

  ROUTE_DATA_MAP.set(TOP_LEVEL_ROUTES.DEVICES, [
    STATE_SLICES.CONNECTED_DEVICES
  ]);
  ROUTE_DATA_MAP.set(TOP_LEVEL_ROUTES.PEOPLE, [STATE_SLICES.CONNECTED_DEVICES]);

  if (isSecurityEnabled) {
    ROUTE_DATA_MAP.set(TOP_LEVEL_ROUTES.NETWORK, [
      STATE_SLICES.CONNECTED_DEVICES,
      STATE_SLICES.SECURITY_THREATS
    ]);
  }

  return ROUTE_DATA_MAP;
}

/**
 * Returns if the app has loaded all the required data for that current route
 * @param {Object} state - full state object
 * @returns {Boolean}
 */
function isDataLoadedForRoute(state) {
  const currentTopLevelRoute = state.navigation.route[0];
  const ROUTE_DATA_MAP = getRouteDataMap(state);
  const ADDITIONAL_REQUIRED_STATE_SLICES =
    ROUTE_DATA_MAP.get(currentTopLevelRoute) || [];

  return (
    CRITICAL_STATE_SLICES.every(slice => isLoaded(state, slice)) &&
    ADDITIONAL_REQUIRED_STATE_SLICES.every(slice =>
      isReadyOrError(state, slice)
    )
  );
}

/**
 * Returns block errors from state.
 *
 * @param {Object} state - full state object
 * @param {Array} Array of errors on state
 */
function getBlockingErrors(state) {
  const stateErrors = getErrors(state);

  return stateErrors.filter(error => error.code !== ERRORS.NO_CONFIG);
}

/**
 * Dispatches SITE_LOADED the application is considered loaded
 *  OR SITE_ERROR if it has encountered a critical error
 *  whichever occurs first.
 * @param {Object} action$ - stream of actions
 * @param {Object} {getState} - redux store, with getState picked off
 */
export function applicationLoading(action$, state$) {
  const appError$ = action$.pipe(
    map(() => getBlockingErrors(state$.value)),
    filter(errors => errors && errors.length),
    map(errors => setSiteError(errors[0]))
  );

  const appLoaded$ = action$.pipe(
    filter(() => isDataLoadedForRoute(state$.value)),
    map(setSiteLoaded)
  );

  return race(appLoaded$, appError$).pipe(take(1));
}

export default {
  applicationLoading
};
