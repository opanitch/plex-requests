import { authenticatePlexWrapper } from 'API/rest/authenticate/authenticate.rest';
import { useCallback, useState } from 'react';
import { Status } from '../actions.interface';
import { Authenticate } from './authenticate.interfaces';

export const useAuthenticate = (): Authenticate => {
  const [serverMessage, setServerMessage] = useState('');
  const [status, setStatus] = useState(Status.INITIAL);
  const [token, setAuthentication] = useState<Authenticate['token']>(null);

  const dispatchAuthenticateWrapper = useCallback(async () => {
    setStatus(Status.BUSY);

    try {
      const token: string = await authenticatePlexWrapper();

      setAuthentication(token);
      setServerMessage('');
      setStatus(Status.SUCCESS);
    } catch (error) {
      setAuthentication(null);
      setServerMessage(error as any);
      setStatus(Status.ERROR);
    }
  }, []);

  return {
    authenticate: dispatchAuthenticateWrapper,
    serverMessage,
    status,
    token,
  };
};
