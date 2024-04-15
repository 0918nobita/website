<script lang="ts">
  import * as styles from './Card.css';

  export let title: string;
  export let desc: string;
  export let link: undefined | string = undefined;
</script>

{#if link !== undefined}
  <a class={styles.clickableCard} href={link}>
    <div class={styles.titleWrapper}>
      <h3 class={styles.title}>{title}</h3>
    </div>
    <p class={styles.desc}>{desc}</p>
  </a>
{:else}
  <article class={styles.nonClickableCard}>
    <div class={styles.titleWrapper}>
      <h3 class={styles.title}>{title}</h3>
    </div>
    <p class={styles.desc}>{desc}</p>
  </article>
{/if}
