import { getServers } from 'API/rest/servers/servers.rest';
import { useCallback, useState } from 'react';
import { Status } from '../actions.interface';
import { GetServers } from './servers.actions.interfaces';

export const useGetServers = (): GetServers => {
  const [serverMessage, setServerMessage] = useState('');
  const [status, setStatus] = useState(Status.INITIAL);
  const [servers, setServers] = useState<GetServers['servers']>([]);

  const dispatchGetServers = useCallback(async () => {
    setStatus(Status.BUSY);

    try {
      const servers = await getServers();

      setServers(servers);
      setServerMessage('');
      setStatus(Status.SUCCESS);
    } catch (error) {
      setServers([]);
      setServerMessage(error as any);
      setStatus(Status.ERROR);
    }
  }, []);

  return {
    getServers: dispatchGetServers,
    servers,
    serverMessage,
    status,
  };
};
