<script lang="ts">
  import "~/style/global.css";
  import "~/style/layer.css";

  import { Sidebar, SpHeader, ThemeToggle } from "~/components";

  import { useThemeToggle } from "./useThemeToggle";
  import { useViewTransition } from "./useViewTransition";

  import * as styles from "./layout.css";

  const { currentlyAppliedTheme, themeSetting } = useThemeToggle();

  useViewTransition();
</script>

<main class={styles.main}>
  <!-- 画面の横幅にあわせて Sidebar と SpHeader のどちらかが表示される -->
  <Sidebar className={styles.sidebar}>
    <ThemeToggle
      currentlyAppliedTheme={$currentlyAppliedTheme}
      bind:themeSetting={$themeSetting}
    />
  </Sidebar>

  <SpHeader className={styles.spHeader} />

  <div class={styles.articleWrapper}>
    <article class={styles.article}>
      <slot />
    </article>
  </div>
</main>
