import { onMount } from 'svelte';
import { writable, type Writable } from 'svelte/store';

const osThemeSetting = (): 'dark' | 'light' =>
  globalThis.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';

const applyThemeSetting = (
  newSetting: 'dark' | 'light' | 'match-system',
  currentlyAppliedTheme: Writable<'dark' | 'light'>
): void => {
  switch (newSetting) {
    case 'dark': {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
      currentlyAppliedTheme.set('dark');
      localStorage.setItem('theme', 'dark');
      return;
    }
    case 'light': {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      currentlyAppliedTheme.set('light');
      localStorage.setItem('theme', 'light');
      return;
    }
  }

  localStorage.removeItem('theme');

  const defaultTheme = osThemeSetting();

  if (defaultTheme === 'dark') {
    document.documentElement.classList.remove('light');
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
  }

  currentlyAppliedTheme.set(defaultTheme);
};

export const useThemeToggle = (): {
  currentlyAppliedTheme: Writable<'dark' | 'light'>;
  themeSetting: Writable<'dark' | 'light' | 'match-system'>;
} => {
  const currentlyAppliedTheme = writable<'dark' | 'light'>('light');
  const themeSetting = writable<'dark' | 'light' | 'match-system'>(
    'match-system'
  );

  onMount(() => {
    currentlyAppliedTheme.set(globalThis.initialTheme);

    const theme = localStorage.getItem('theme');

    if (theme === 'dark') {
      themeSetting.set('dark');
    } else if (theme === 'light') {
      themeSetting.set('light');
    } else {
      themeSetting.set('match-system');
    }

    themeSetting.subscribe((newSetting) =>
      applyThemeSetting(newSetting, currentlyAppliedTheme)
    );
  });

  return {
    currentlyAppliedTheme,
    themeSetting,
  };
};
