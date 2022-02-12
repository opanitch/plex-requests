import { PlexServer } from 'plex-wrapper/lib/models/server';
import { ActionHook } from '../actions.interface';

export interface GetServers extends ActionHook {
  getServers: () => void;
  servers: PlexServer[];
}
