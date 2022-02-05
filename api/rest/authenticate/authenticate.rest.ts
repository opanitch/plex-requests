import { PlexAPIClient } from 'plex-wrapper';

export const client = new PlexAPIClient('plexRequest', 'opanitch', '', {
  description: 'Web app for Shared Friends to request new content',
  title: 'Plex Request Application',
  version: '0.1.0',
});

export const authenticatePlexWrapper = async (): Promise<any> => {
  // const response = await axios.get(`${BASE_URL}/${srn}`);
  // return response.data;
  const response = await client.authenticate();

  return response;
};
