<script lang="ts">
  import '~/style/global.css';
  import '~/style/layer.css';

  import { onMount } from 'svelte';

  import { onNavigate } from '$app/navigation';

  import { Sidebar, SpHeader, ThemeToggle } from '~/components';

  import * as styles from './layout.css';

  const osThemeSetting = () =>
    window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';

  let currentlyAppliedTheme: 'dark' | 'light' = 'light';
  let themeSetting: 'dark' | 'light' | 'match-system';

  const onThemeChange = () => {
    switch (themeSetting) {
      case 'dark':
        document.documentElement.classList.remove('light');
        document.documentElement.classList.add('dark');
        currentlyAppliedTheme = 'dark';
        localStorage.setItem('theme', 'dark');
        return;
      case 'light':
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
        currentlyAppliedTheme = 'light';
        localStorage.setItem('theme', 'light');
        return;
      default: {
        localStorage.removeItem('theme');

        const defaultTheme = osThemeSetting();

        if (defaultTheme === 'dark') {
          document.documentElement.classList.remove('light');
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
          document.documentElement.classList.add('light');
        }

        currentlyAppliedTheme = defaultTheme;
      }
    }
  };

  onMount(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      currentlyAppliedTheme = 'dark';
      return;
    }
    if (theme === 'light') {
      currentlyAppliedTheme = 'light';
      return;
    }
    currentlyAppliedTheme = osThemeSetting();
  });

  onNavigate((navigation) => {
    if (document.startViewTransition === undefined) return;

    return new Promise((resolve) => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      document.startViewTransition!(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });
</script>

<main class={styles.main}>
  <!-- 画面の横幅にあわせて Sidebar と SpHeader のどちらかが表示される -->
  <Sidebar className={styles.sidebar}>
    <ThemeToggle
      {currentlyAppliedTheme}
      bind:themeSetting
      onChange={onThemeChange}
    />
  </Sidebar>

  <SpHeader className={styles.spHeader} />

  <div class={styles.articleWrapper}>
    <article class={styles.article}>
      <slot />
    </article>
  </div>
</main>
