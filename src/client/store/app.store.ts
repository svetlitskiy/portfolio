'use client';

import { makeAutoObservable } from 'mobx';
import { SettingsStore } from '@/client/store/settings.store';

export class AppStore {
  public settings: SettingsStore;

  constructor() {
    makeAutoObservable(this);
    this.settings = new SettingsStore();
  }
}
