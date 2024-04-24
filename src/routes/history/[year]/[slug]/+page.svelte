<script lang="ts">
  import type { PageData } from './$types';

  import { Breadcrumb, ModifiedAt } from '~/components';

  export let data: PageData;

  const title = `${data.metadata.title} | Kodai のウェブサイト`;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="og:title" content={title} />
  <meta
    name="og:url"
    content="https://kodai.engineer/history/{data.metadata.year}/{data.metadata
      .slug}"
  />
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
