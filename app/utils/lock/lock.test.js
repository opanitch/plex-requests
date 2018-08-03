import { createMockTask } from 'redux-saga/utils';
import { cancel, spawn } from 'redux-saga/effects';

import Lock from './lock';

describe('Lock', () => {
  function* exampleMethod() {
    yield 42;
  }

  it('handles cancel method', () => {
    const lockedTask = new Lock(exampleMethod);

    expect(lockedTask.cancel).toBeDefined();
    let gen = lockedTask.execute();
    let result = gen.next();

    lockedTask.task = createMockTask();

    expect(result.value).toEqual(spawn(exampleMethod));
    gen = lockedTask.cancel();
    result = gen.next();
    expect(result.value).toEqual(cancel(lockedTask.task));
  });

  it('handles cancel method without task', () => {
    const lockedTask = new Lock(exampleMethod);
    let gen = lockedTask.execute();
    let result = gen.next();

    expect(result.value).toEqual(spawn(exampleMethod));

    gen = lockedTask.cancel();
    result = gen.next();

    // Generator resolves
    expect(result.value).toBeUndefined();
    expect(result.done).toBe(true);
  });

  it('handles execute method', () => {
    const lockedTask = new Lock(exampleMethod);

    expect(lockedTask.execute).toBeDefined();
    const gen = lockedTask.execute();
    let result = gen.next();

    expect(result.value).toEqual(spawn(exampleMethod));

    // Generator resolves
    result = gen.next();
    expect(result.done).toBe(true);
  });

  it('handles execute method with running task', () => {
    const lockedTask = new Lock(exampleMethod);

    lockedTask.task = createMockTask();
    const gen = lockedTask.execute();
    const result = gen.next();

    // Generator resolves
    expect(result.value).toBeUndefined();
    expect(result.done).toBe(true);
  });
});
