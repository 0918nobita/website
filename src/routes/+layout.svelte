<script lang="ts">
  import '~/style/global.css';
  import '~/style/layer.css';

  import { onNavigate } from '$app/navigation';

  import { Sidebar, SpHeader } from '~/components';

  import * as styles from './layout.css';

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
  <Sidebar className={styles.sidebar} />
  <SpHeader className={styles.spHeader} />
  <div class={styles.articleWrapper}>
    <article class={styles.article}>
      <slot />
    </article>
  </div>
</main>
