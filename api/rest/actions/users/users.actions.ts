import { getUsers } from 'API/rest/users/users.rest';
import { useCallback, useState } from 'react';
import { Status } from '../actions.interface';
import { GetUsers } from './users.interfaces';

export const useGetUsers = (): GetUsers => {
  const [serverMessage, setServerMessage] = useState('');
  const [status, setStatus] = useState(Status.INITIAL);
  const [users, setUsers] = useState<GetUsers['users']>([]);

  const dispatchGetUsers = useCallback(async () => {
    setStatus(Status.BUSY);

    try {
      const users = await getUsers();

      setUsers(users);
      setServerMessage('');
      setStatus(Status.SUCCESS);
    } catch (error) {
      setUsers([]);
      setServerMessage(error as any);
      setStatus(Status.ERROR);
    }
  }, []);

  return {
    getUsers: dispatchGetUsers,
    serverMessage,
    status,
    users,
  };
};
