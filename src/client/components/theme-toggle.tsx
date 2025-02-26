'use client';

import { Button } from '@mui/material';
import { useSettingsStore } from '@/client/hooks/use-settings-store.hook';
import { observer } from 'mobx-react-lite';

export const ThemeToggleComponent = () => {
  const settingsStore = useSettingsStore();

  const toggleTheme = (isDark: boolean): void => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    settingsStore.theme = isDark ? 'dark' : 'light';
  };

  return (
    <div className="flex flex-row gap-2 hidden">
      {settingsStore.theme}
      <Button color="primary" variant="contained" onClick={() => toggleTheme(true)}>
        Dark
      </Button>
      <Button color="secondary" variant="outlined" onClick={() => toggleTheme(false)}>
        Light
      </Button>
    </div>
  );
};

export const ThemeToggle = observer(ThemeToggleComponent);
