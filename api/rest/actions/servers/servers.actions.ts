// import { authenticatePlexWrapper } from 'API/rest/authenticate/authenticate.rest';
import { getServers } from 'API/rest/servers/servers.rest';
import { useCallback, useState } from 'react';
import { GetServers } from './servers.actions.interfaces';

export const useGetServers = (): GetServers => {
  const [serverMessage, setServerMessage] = useState('');
  const [status, setStatus] = useState('initial');
  const [servers, setServers] = useState<GetServers['servers']>([]);

  const dispatchGetServers = useCallback(async () => {
    setStatus('fetching');

    try {
      const servers = await getServers();

      setServers(servers);
      setServerMessage('');
      setStatus('done');
    } catch (error) {
      setServers([]);
      setServerMessage(error as any);
      setStatus('error');
    }
  }, []);

  return {
    getServers: dispatchGetServers,
    servers,
    serverMessage,
    status,
  };
};
