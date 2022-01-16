import { Epic } from 'redux-observable';
import { filter, map, tap } from 'rxjs/operators';
import {
  apiClient,
  authenticatePlexWrapper as authenticate,
  client,
} from '../../rest/authenticate/authenticate.rest';
// import { waitForPromise } from '../epics';
import { Action, StoreShape } from '../types';
import { fetchComplete, fetchStart } from './actions';

/**
 * Fetches the account resource.
 * @param {Observable} action$ Stream of actions
 * @param {Observable} state$ Stream of state changes
 * @returns {Observable} Stream of actions to be dispatched
 */
export const fetch: Epic<Action, Action, StoreShape> = (action$) =>
  action$.pipe(
    filter(fetchStart.match),
    tap(async () => {
      console.log('PLEX FETCH');

      // client.getServers().then((result) => {
      //   console.log(result);
      // });

      console.log(client);
      // client.getServers().then((result) => {
      //   console.log(result);
      // });

      try {
        await authenticate();

        const plexServers = await client.getServers();
        console.log(plexServers);

        const allUsers = await client.getAllUsers();
        console.log(allUsers);

        const users = await client.getUsers();
        console.log(users);

        const sessions = await client.getSessions(
          plexServers[0].address,
          parseInt(plexServers[0].port)
        );
        console.log(sessions);
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
        const query = await apiClient.query('/');
        console.log(query);

        // return {
        //   movieSection,
        //   tvSection,
        // };
      } catch (error) {
        console.log(error);

        return error;
      }
    }),
    map(fetchComplete)
  );
