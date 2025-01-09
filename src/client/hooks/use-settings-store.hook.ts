'use client';

import { useAppStore } from './use-app-store.hook';
import { AppStore } from '@/client/store/app.store';

export const useSettingsStore = () => {
  const appStore: AppStore = useAppStore();
  return appStore.settings;
};
