import { PlexUser } from 'plex-wrapper/lib/models/user';
import { client } from '../authenticate/authenticate.rest';

export const getAllUsers = async (): Promise<PlexUser[]> => {
  const response = await client.getAllUsers();

  return response;
};

export const getUsers = async (): Promise<PlexUser[]> => {
  const response = await client.getUsers();

  return response;
};
