import atob from 'atob';
import _ from 'lodash';

export const STORAGE_TOKEN_NAME = 'ebtoken';

interface TokenPayload {
  accessToken: string;
}

export default {
  parse(): Record<string, any> | null {
    const token = this.get();
    if (!token) return null;
    
    const arr = token.split('.');
    if (arr.length === 3) {
      const decodedPayload = atob(arr[1]);
      return JSON.parse(decodedPayload);
    }
    return null;
  },

  check(): boolean {
    try {
      const payload = this.parse();
      return !_.isEmpty(payload);
    } catch (error) {
      this.remove();
      return false;
    }
  },

  get(): string | null {
    return localStorage.getItem(STORAGE_TOKEN_NAME);
  },

  async save(payload: TokenPayload): Promise<boolean> {
    return Promise.resolve().then(() => {
      if (payload && payload.accessToken) {
        localStorage.setItem(STORAGE_TOKEN_NAME, payload.accessToken);
      }
      return true;
    });
  },

  remove(): void {
    localStorage.removeItem(STORAGE_TOKEN_NAME);
  },

  removeAll(): void {
    localStorage.removeItem(STORAGE_TOKEN_NAME);
  },
};
