import { getUsers } from 'API/rest/users/users.rest';
import { useCallback, useState } from 'react';

export const useGetUsers = () => {
  const [serverMessage, setServerMessage] = useState('');
  const [status, setStatus] = useState('initial');
  const [users, setUsers] = useState([]);

  const dispatchGetUsers = useCallback(async () => {
    setStatus('fetching');

    try {
      const users = await getUsers();

      setUsers(users);
      setServerMessage('');
      setStatus('done');
    } catch (error) {
      setUsers([]);
      setServerMessage(error as any);
      setStatus('error');
    }
  }, []);

  return {
    getUsers: dispatchGetUsers,
    serverMessage,
    status,
    users,
  };
};
