<script lang="ts">
  import * as styles from './Breadcrumb.css';

  export let path: Array<{ label: string; link: string }>;
</script>

<ol class={styles.breadcrumb}>
  {#each path as { label, link }}
    <li><a href={link}>{label}</a></li>
  {/each}
</ol>
