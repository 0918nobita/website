<script lang="ts">
import type { PageData } from './$types';

import { Timeline } from '~/components';

interface Props {
  data: PageData;
}

const { data }: Props = $props();

const title = '自分史 | Kodai のウェブサイト';
const description = 'Kodai の経歴についてまとめています。';
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta name="og:title" content={title} />
  <meta name="og:description" content={description} />
  <meta name="og:url" content="https://kodai.engineer/history" />
</svelte:head>

<h1>自分史</h1>

<Timeline contents={data.timelineContents} />
