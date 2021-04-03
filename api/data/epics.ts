import { Epic, combineEpics, createEpicMiddleware } from 'redux-observable';
import { BehaviorSubject, OperatorFunction, from, of, pipe } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { Action, StoreShape } from './types';

import * as plexLibraryEpics from './plex-library/epics';

const epics = [...Object.values(plexLibraryEpics)] as Epic<
  Action,
  Action,
  StoreShape
>[];

const epic$ = new BehaviorSubject(combineEpics(...epics));

const epicDependencies = {
  document: document,
  epic$: epic$,
  window: window,
};

export const middleware = createEpicMiddleware({
  dependencies: epicDependencies,
});

export const rootEpic: Epic<Action, Action, StoreShape> = (
  action$,
  state$,
  dependencies
) => epic$.pipe(mergeMap((epic) => epic(action$, state$, dependencies)));

/**
 * An RxJS-style "Operator" for working with "Observables". An Observable
 * can be "piped" to waitForPromise the same way that you would pipe
 * an Observable to 'map', 'delay', 'filter' or any other Operator.
 *
 * waitForPromise returns an Observable. If the Promise returned by
 * invoking promiseFunction fullfills (i.e. resolves successfully)
 * then the returned Obserable will have the property 'resolution'
 * set to the value that the Promise resolved to. If the Promise
 * rejects, then the Observable will have the property 'rejection'
 * set to the value the Promise rejected with.
 *
 * waitForPromise accepts a callback whose areguments are the values
 * previously emitted
 * @example
 * // If the native fetch API was passed in as promiseFunction and
 * // the action {type: 'PING'} was dispatched, the argument 'values'
 * // will be {type: 'PING'}
 * action$.pipe(
 *   waitForPromise(values => fetch(values))
 * )
 *
 * @param {Function} promiseFunction a function which returns a Promise
 * @returns {Observable} Observable with the property 'resolved' or
 *   'rejected' set to the value the Promise resolved to or rejected with
 *   respectively
 */
export const waitForPromise = <T, Res, Rej = any>(
  promiseFunction: (arg0: T) => Promise<Res>
): OperatorFunction<
  T,
  | {
      resolved: Res;
      rejected?: never;
    }
  | {
      resolved?: never;
      rejected: Rej;
    }
> =>
  pipe(
    mergeMap((values) =>
      from(promiseFunction(values)).pipe(
        map((resolved) => ({ resolved })),
        catchError((rejected: Rej) => of({ rejected }))
      )
    )
  );
