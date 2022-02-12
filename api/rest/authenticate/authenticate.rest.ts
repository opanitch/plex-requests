import { PlexAPIClient } from 'plex-wrapper';

export const client = new PlexAPIClient('plexRequest', 'opanitch', '', {
  description: 'Web app for Shared Friends to request new content',
  title: 'Plex Request Application',
  version: '0.1.0',
});

export const authenticatePlexWrapper = async (): Promise<string> => {
  const response = await client.authenticate();

  return response;
};
