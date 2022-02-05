export interface ActionHook {
  serverMessage: string;
  status: Status;
}

export enum Status {
  BUSY = 'busy',
  ERROR = 'error',
  INITIAL = 'initial',
  SUCCESS = 'success',
}
