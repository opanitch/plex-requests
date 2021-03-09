import { StatusType } from '../types';

export interface RequestListState {
  form: FormType | undefined;
  status: StatusType;
  userRequests: string[];
  validUsers: string[];
}
