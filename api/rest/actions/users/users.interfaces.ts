import { PlexUser } from 'plex-wrapper/lib/models/user';
import { ActionHook } from '../actions.interface';

export interface GetUsers extends ActionHook {
  getUsers: () => void;
  users: PlexUser[];
}
