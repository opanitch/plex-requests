import { PlexAPIClient } from 'plex-wrapper';
import { Epic } from 'redux-observable';
import { filter, map, tap } from 'rxjs/operators';
// import { waitForPromise } from '../epics';
import { Action, StoreShape } from '../types';
import { fetchComplete, fetchStart } from './actions';

const client = new PlexAPIClient('plexRequest', 'opanitch', '8sQBjsxocNGn', {
  description: 'Web app for Shared Friends to request new content',
  title: 'Plex Request Application',
  version: '1.0.0',
});

client.getServers().then((result) => {
  console.log(result);
});

/**
 * Fetches the account resource.
 * @param {Observable} action$ Stream of actions
 * @param {Observable} state$ Stream of state changes
 * @returns {Observable} Stream of actions to be dispatched
 */
export const fetch: Epic<Action, Action, StoreShape> = (action$) =>
  action$.pipe(
    filter(fetchStart.match),
    tap(() => {
      console.log('PLEX FETCH');

      // client.getServers().then((result) => {
      //   console.log(result);
      // });

      console.log(client);
      // const account = await new MyPlexAccount(
      //   'http://192.168.1.3:32400',
      //   'opanitch',
      //   '8sQBjsxocNGn'
      // ).connect();
      // const resource = await account.resource('<SERVERNAME>');
      // const plex = await resource.connect();
      // const library = await plex.library();
      // const movieSection = await library.section<MovieSection>('Movies');
      // const tvSection = await library.section<ShowSection>('TV Shows');

      // return {
      //   movieSection,
      //   tvSection,
      // };
    }),
    map(fetchComplete)
  );
