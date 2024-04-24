<script lang="ts">
  const title = 'スキル・強み | Kodai のウェブサイト';
  const description =
    'Kodai のスキル・強みについてジャンル毎に掲載しています。';
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta name="og:title" content={title} />
  <meta name="og:description" content={description} />
  <meta name="og:url" content="https://kodai.engineer/skills" />
</svelte:head>

<h1>スキル・強み</h1>
<h2>Web 開発</h2>
<ul>
  <li>
    HTML / CSS
    <ul>
      <li>ダークモード対応</li>
      <li>
        Flexbox, Grid Layout, Subgrid, Media/Container Query
        を用いたレスポンシブ対応
      </li>
      <li>
        <code>@layer</code> ルール (Cascade Layers) を用いた、スタイル適用順序の制御
      </li>
    </ul>
  </li>
  <li>JavaScript / TypeScript</li>
  <li>Vanilla Extract CSS</li>
  <li>Zod</li>
  <li>Svelte, SvelteKit</li>
  <li>Astro</li>
  <li>React</li>
  <li>Redux, redux-thunk, redux-saga</li>
  <li>Vue.js</li>
  <li>Cycle.js</li>
  <li>RxJS</li>
  <li>Elm</li>
</ul>
<h2>その他</h2>
<ul>
  <li>Java</li>
  <li>Kotlin</li>
  <li>F#</li>
  <li>OCaml</li>
  <li>Haskell</li>
  <li>Rust</li>
  <li>Gleam</li>
</ul>
