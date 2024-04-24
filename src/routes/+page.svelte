<script lang="ts">
  import { ExternalLink } from '~/components';

  const title = 'Kodai のウェブサイト';
  const description = 'Kodai の経歴・連作先・制作物等を掲載しています。';
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta name="og:title" content={title} />
  <meta name="og:description" content={description} />
  <meta name="og:url" content="https://kodai.engineer" />
</svelte:head>

<h1>Kodai のウェブサイト</h1>
<p>本名：松本 幸大 (まつもと こうだい)</p>

<ul>
  <li>2000年2月16日生まれ (現在24歳)</li>
  <li>25卒</li>
  <li>男性</li>
  <li>高知県出身・在住</li>
</ul>

<p>計算機とプログラミング言語が好きです！</p>

このウェブサイトは

<ul>
  <li>
    <ExternalLink url="https://www.typescriptlang.org/" label="TypeScript" />
  </li>
  <li><ExternalLink url="https://kit.svelte.dev" label="SvelteKit" /></li>
  <li>
    <ExternalLink
      url="https://vanilla-extract.style/"
      label="Vanilla Extract CSS"
    />
  </li>
  <li>
    <ExternalLink
      url="https://pages.cloudflare.com/"
      label="Cloudflare Pages"
    />
  </li>
</ul>

等を用いて開発・デプロイされています。
<p>
  ソースコード：
  <ExternalLink
    url="https://github.com/0918nobita/website"
    label="(GitHub) 0918nobita/website"
  />
</p>
