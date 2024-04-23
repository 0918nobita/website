<script lang="ts">
  import type { PageData } from './$types';

  import { Timeline } from '~/components';

  export let data: PageData;
</script>

<svelte:head>
  <title>自分史 | Kodai のウェブサイト</title>
</svelte:head>

<h1>自分史</h1>

<Timeline contents={data.timelineContents} />
