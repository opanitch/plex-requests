import selectors from 'modules/application/selectors';

import { store } from 'index';

class Storage {
  constructor() {
    this.visitorSessionId = null;
    this.activeCoreKey = 'activecore_';
  }

  init() {
    const state = store.getState();

    this.visitorSessionId = selectors.getVisitorSessionId(state);
    const storageKey = this.getActiveCoreStorageKey(this.visitorSessionId);

    // remove unused active core items
    for (const item in window.localStorage) {
      if (item.startsWith(this.activeCoreKey) && item !== storageKey) {
        window.localStorage.removeItem(item);
      }
    }
  }

  getActiveCoreStorageKey(key) {
    return this.activeCoreKey.concat(key);
  }

  getSessionCache() {
    const storageKey = this.getActiveCoreStorageKey(this.visitorSessionId);
    const rawData = window.localStorage.getItem(storageKey);

    try {
      return rawData ? JSON.parse(rawData) : {};
    } catch (e) {
      return {};
    }
  }

  setSessionCache(value) {
    const storageKey = this.getActiveCoreStorageKey(this.visitorSessionId);

    window.localStorage.setItem(storageKey, JSON.stringify(value));
    return;
  }

  get(key) {
    const sessionCache = this.getSessionCache();

    return sessionCache && sessionCache[key] ? sessionCache[key] : null;
  }

  set(key, value) {
    let sessionCache = this.getSessionCache();

    // Ensure sessionCache is an object
    sessionCache =
      sessionCache && sessionCache.constructor === Object ? sessionCache : {};
    sessionCache[key] = value;

    this.setSessionCache(sessionCache);

    return;
  }
}

// Export singleton
const storage = new Storage();

export default storage;
