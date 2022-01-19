import { authenticatePlexWrapper } from 'API/rest/authenticate/authenticate.rest';
import { useCallback, useState } from 'react';

export const useAuthenticate = () => {
  const [serverMessage, setServerMessage] = useState('');
  const [status, setStatus] = useState('initial');
  const [authentication, setAuthentication] = useState(null);

  const dispatchAuthenticateWrapper = useCallback(async () => {
    setStatus('fetching');

    try {
      const authentication = await authenticatePlexWrapper();

      setAuthentication(authentication);
      setServerMessage('');
      setStatus('done');
    } catch (error) {
      setAuthentication(null);
      setServerMessage(error as any);
      setStatus('error');
    }
  }, []);

  return {
    authenticate: dispatchAuthenticateWrapper,
    authentication,
    serverMessage,
    status,
  };
};
