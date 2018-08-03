import storage from 'utils/storage/storage';

// Mock store
jest.mock('index', () => {
  return {
    store: {
      getState() {
        return {
          application: {
            userContext: {
              CustomerGuid: '709016280517072017Comcast.ident',
              LoginEmail: 'singlemetroe@yopmail.com',
              SdWanAccountNumber: '939808426',
              VisitorSessionId: 'E53C1149-912D-4E0E-8D05-D09EA7160BB2'
            },
            userToken: 'Hello'
          }
        };
      }
    }
  };
});

describe('storage', () => {
  const localStorage = {
    'activecore_E53C1149-912D-4E0E-8D05-D09EA7160BB2':
      '{"inventoryColPref":["deviceCLLI"]}',
    'activecore_E53C1149-912D-4E0E-8D05-D09EA7160BB3':
      '{"inventoryColPref":["uniId"]}',
    logout: 'false'
  };
  const mockLocalStorage = {
    setItem: jest.fn(() => undefined),
    getItem: jest.fn(key => localStorage[key]),
    removeItem: jest.fn(() => undefined),
    ...localStorage
  };

  window.localStorage = mockLocalStorage;

  const storageKey = 'activecore_E53C1149-912D-4E0E-8D05-D09EA7160BB2';

  it('should handle init', () => {
    storage.init();

    expect(storage.visitorSessionId).toEqual(
      'E53C1149-912D-4E0E-8D05-D09EA7160BB2'
    );

    expect(window.localStorage.removeItem).toHaveBeenCalledWith(
      'activecore_E53C1149-912D-4E0E-8D05-D09EA7160BB3'
    );
  });

  it('should handle getActiveCoreStorageKey', () => {
    const storageKey = storage.getActiveCoreStorageKey('test');

    expect(storageKey).toEqual('activecore_test');
  });

  it('should handle getSessionCache', () => {
    const cache = storage.getSessionCache();

    expect(cache).toEqual({
      inventoryColPref: ['deviceCLLI']
    });
  });

  it('should handle getSessionCache with undefined item', () => {
    window.localStorage.getItem.mockImplementationOnce(() => undefined);

    const cache = storage.getSessionCache();

    expect(cache).toEqual({});
  });

  it('should handle getSessionCache with invalid JSON', () => {
    window.localStorage.getItem.mockImplementationOnce(() => ({ test: 123 }));

    const cache = storage.getSessionCache();

    expect(cache).toEqual({});
  });

  it('should handle setSessionCache', () => {
    const value = {
      inventoryColPref: ['uniId']
    };

    storage.setSessionCache(value);

    expect(window.localStorage.setItem).toHaveBeenCalledWith(
      storageKey,
      JSON.stringify(value)
    );
  });

  it('should handle get', () => {
    const sessionItem = storage.get('inventoryColPref');

    expect(sessionItem).toEqual(['deviceCLLI']);
  });

  it('should handle get for null', () => {
    const sessionItem = storage.get('test');

    expect(sessionItem).toEqual(null);
  });

  it('should handle set', () => {
    storage.set('inventoryColPref', ['uniId']);

    expect(window.localStorage.setItem).toHaveBeenCalledWith(
      storageKey,
      JSON.stringify({
        inventoryColPref: ['uniId']
      })
    );
  });

  it('should handle set with non-object sessionCache', () => {
    window.localStorage.getItem.mockImplementationOnce(() =>
      JSON.stringify([])
    );
    storage.set('test', 123);

    expect(window.localStorage.setItem).toHaveBeenCalledWith(
      storageKey,
      JSON.stringify({ test: 123 })
    );
  });
});
