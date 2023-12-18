export const localStorageKey = 'com.drpanda.chatgpt.';

interface ISessionStorage<T> {
  key: string;
  defaultValue: T;
}
// 重新封装的sessionStorage
export class Storage<T> implements ISessionStorage<T> {
  key: string;

  defaultValue: T;

  constructor(key: string, defaultValue: T) {
    this.key = localStorageKey + key;
    this.defaultValue = defaultValue;
  }

  setItem(value: T) {
    sessionStorage.setItem(this.key, JSON.stringify(value));
  }

  getItem(): T {
    const value = sessionStorage[this.key] && sessionStorage.getItem(this.key);
    if (value === undefined) return this.defaultValue;
    try {
      return value && value !== 'null' && value !== 'undefined' ? (JSON.parse(value) as T) : this.defaultValue;
    } catch (error) {
      return value && value !== 'null' && value !== 'undefined' ? (value as unknown as T) : this.defaultValue;
    }
  }

  removeItem() {
    sessionStorage.removeItem(this.key);
  }
}

/** 管理token */
export const tokenStorage = new Storage<string>('authToken', '');

/** 只清除当前项目所属的本地存储 */
export const clearSessionStorage = () => {
  for (const key in sessionStorage) {
    if (key.includes(localStorageKey)) {
      sessionStorage.removeItem(key);
    }
  }
};