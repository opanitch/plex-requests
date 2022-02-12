import { PlexServer } from 'plex-wrapper/lib/models/server';
import { PlexSession } from 'plex-wrapper/lib/models/session';
import { client } from '../authenticate/authenticate.rest';

export const getServers = async (): Promise<PlexServer[]> => {
  const response = await client.getServers();

  return response;
};

export const getSessions = async (
  address: string,
  port: number
): Promise<PlexSession[]> => {
  const response = await client.getSessions(address, port);

  return response;
};
