import { ActionHook } from '../actions.interface';

export interface Authenticate extends ActionHook {
  authenticate: () => void;
  token: string | null;
}
