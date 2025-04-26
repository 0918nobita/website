<script lang="ts">
import '~/style/global.css';
import '~/style/layer.css';

import { Sidebar, SpHeader, ThemeToggleSkeleton } from '~/components';

import { useThemeToggle } from './useThemeToggle';
import { useViewTransition } from './useViewTransition';

import * as styles from './layout.css';

const { themeTogglePromise, currentlyAppliedTheme, themeSetting, onChange } =
  useThemeToggle();

useViewTransition();
</script>

<main class={styles.main}>
  <!-- 画面の横幅にあわせて Sidebar と SpHeader のどちらかが表示される -->
  <Sidebar className={styles.sidebar}>
    {#await themeTogglePromise}
      <ThemeToggleSkeleton />
    {:then ThemeToggle}
      <ThemeToggle
        currentlyAppliedTheme={$currentlyAppliedTheme}
        bind:themeSetting={$themeSetting}
        {onChange}
      />
    {/await}
  </Sidebar>

  <SpHeader className={styles.spHeader} />

  <div class={styles.articleWrapper}>
    <article class={styles.article}>
      <slot />
    </article>
  </div>
</main>
