import { GetServersResponse } from 'API/rest/dto/servers.interfaces';
import { ActionHook } from '../actions.interface';

export interface GetServers extends ActionHook {
  getServers: () => void;
  servers: GetServersResponse[];
}
