<script lang="ts">
  import ThemeToggleDisplay from './ThemeToggleDisplay.svelte';

  function osThemeSetting(): 'dark' | 'light' {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  let currentTheme: 'dark' | 'light' = 'light';

  let themeSetting: 'match-system' | 'dark' | 'light' = 'match-system';

  if (typeof localStorage !== 'undefined') {
    const storedTheme = localStorage.getItem('theme');

    switch (storedTheme) {
      case 'dark':
        themeSetting = currentTheme = 'dark';
        break;

      case 'light':
        themeSetting = currentTheme = 'light';
        break;

      default:
        themeSetting = 'match-system';
        currentTheme = osThemeSetting();
    }
  }

  function onChange() {
    window.changeTheme(document, themeSetting);

    switch (themeSetting) {
      case 'dark':
        currentTheme = 'dark';
        break;

      case 'light':
        currentTheme = 'light';
        break;

      default:
        currentTheme = osThemeSetting();
    }
  }
</script>

<ThemeToggleDisplay {currentTheme} bind:themeSetting {onChange} />
