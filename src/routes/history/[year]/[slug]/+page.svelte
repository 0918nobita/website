<script lang="ts">
  import type { PageData } from './$types';

  import { Breadcrumb, ModifiedAt } from '~/components';

  export let data: PageData;
</script>

<svelte:head>
  <title>{data.metadata.title} | Kodai のウェブサイト</title>
</svelte:head>

<Breadcrumb
  path={[
    { label: '自分史', link: '/history' },
    {
      label: data.metadata.title,
      link: `/history/${String(data.metadata.year)}/${data.metadata.slug}`,
    },
  ]}
/>

<ModifiedAt date={new Date(data.metadata.modifiedAt)} />

<h1>{data.metadata.title}</h1>

<svelte:component this={data.content} />
