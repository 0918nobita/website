<script lang="ts">
  import type { Snippet } from "svelte";

  import * as styles from "./Sidebar.css";

  import icon from "~/assets/icon.jpg";

  interface Props {
    children?: Snippet;
    className: string;
  }

  const { children, className }: Props = $props();
</script>

<nav class="{className} {styles.sidebar}">
  <img class={styles.icon} alt="Kodai のアイコン" src={icon} />

  <ul class={styles.navList}>
    <li class={styles.navItem}>
      <a class={styles.navItemLink} href="/">トップページ</a>
    </li>

    <li class={styles.navItem}>
      <a class={styles.navItemLink} href="/contact">連絡先</a>
    </li>

    <li class={styles.navItem}>
      <a class={styles.navItemLink} href="/skills">スキル・強み</a>
    </li>

    <li class={styles.navItem}>
      <a class={styles.navItemLink} href="/history">自分史</a>
    </li>

    <li class={styles.navItem}>
      <a class={styles.navItemLink} href="/hobbies">趣味</a>
    </li>
  </ul>

  <div class={styles.spacer}></div>

  {@render children?.()}
</nav>
