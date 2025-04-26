<script lang="ts">
import * as styles from './style.css';

interface Props {
  path: ReadonlyArray<{ label: string; link: string }>;
}

const { path }: Props = $props();
</script>

<ol class={styles.breadcrumb}>
  {#each path as { label, link }}
    <li><a href={link}>{label}</a></li>
  {/each}
</ol>
