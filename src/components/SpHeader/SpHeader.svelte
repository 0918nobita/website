<script lang="ts">
  import * as styles from './style.css';

  import icon from '~/assets/icon.jpg';

  export let className: string;
</script>

<header class="{className} {styles.header}">
  <a class={styles.iconWrapper} href="/">
    <img class={styles.icon} alt="Kodai のアイコン" src={icon} />
  </a>
  <a class={styles.navItem} href="/">トップ</a>
  <a class={styles.navItem} href="/contact">連絡先</a>
  <a class={styles.navItem} href="/skills">スキル</a>
  <a class={styles.navItem} href="/history">自分史</a>
  <a class={styles.navItem} href="/hobbies">趣味</a>
</header>
