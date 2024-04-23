<script lang="ts">
  import * as styles from './style.css';

  import icon from '~/assets/icon.jpg';

  export let className: string;
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

  <div class={styles.spacer} />

  <slot />
</nav>
