'use client';

import { AppStore } from '@/client/store/app.store';

let appStoreInstance: AppStore;

export const useAppStore = (): AppStore => {
  if (!appStoreInstance) {
    appStoreInstance = new AppStore();
  }

  return appStoreInstance;
};
