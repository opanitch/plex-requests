import { StoreKey, StoreShape } from './types';

export const getSliceOfState = <T extends StoreKey>(
  state: StoreShape,
  slice: T
): StoreShape[T] => state[slice];
