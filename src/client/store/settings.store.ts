'use client';

import { makeAutoObservable } from 'mobx';

export class SettingsStore {
  private _theme: 'dark' | 'light' = 'dark';

  constructor() {
    makeAutoObservable(this);
    if (typeof window !== 'undefined') {
      this._theme = localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
    }
  }

  get theme(): 'dark' | 'light' {
    return this._theme;
  }

  set theme(theme: 'dark' | 'light') {
    this._theme = theme;
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
    }
  }
}
