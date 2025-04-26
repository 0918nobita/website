<script lang="ts">
import * as styles from './style.css';

import icon from '~/assets/icon.jpg';

interface Props {
  className: string;
}

const { className }: Props = $props();
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
