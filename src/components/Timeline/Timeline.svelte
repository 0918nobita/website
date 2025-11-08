<script lang="ts">
  import { ExternalLink } from '~/components';

  import * as styles from './Timeline.css';

  type Link =
    | { type: 'external'; url: string }
    | { type: 'internal'; path: string };

  type HistoryDetail = Readonly<{
    type: 'primary' | 'secondary' | 'tertiary';
    text: string;
    link?: Link;
  }>;

  type YearlyContent = Readonly<{
    marker: string;
    items: readonly HistoryDetail[];
  }>;

  type Props = Readonly<{
    contents: readonly YearlyContent[];
  }>;

  const { contents }: Props = $props();
</script>

<ul class={styles.timeline}>
  {#each contents as content}
    <li class={styles.timelineItem}>
      <span class={styles.marker} id={content.marker}>{content.marker}</span>

      <ul class={styles.innerList}>
        {#each content.items as item}
          <li>
            <span
              class={{
                primary: styles.primary,
                secondary: styles.secondary,
                tertiary: styles.tertiary,
              }[item.type]}
            >
              {#if item.link === undefined}
                {item.text}
              {:else if item.link.type === 'internal'}
                <a href={item.link.path}>{item.text}</a>
              {:else}
                <ExternalLink url={item.link.url} label={item.text} />
              {/if}
            </span>
          </li>
        {/each}
      </ul>
    </li>
  {/each}
</ul>
