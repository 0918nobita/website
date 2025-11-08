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
<h3>HTML/CSS</h3>
<p>
  中学２年生の頃にホームページを作るという目的で入門し、現在まで頻繁に触れてきた技術です。
</p>
<p>
  現在は WAI-ARIA, WCAG
  を意識したマークアップを学びつつ個人開発で実践しています。
</p>
<p>その他、以下のような関連技術を学んできました。</p>
<ul>
  <li>Media Query, CSS 変数を活用したダークモード対応</li>
  <li>
    Flexbox, Grid Layout, Subgrid, Media/Container Query
    を用いたレスポンシブ対応
  </li>
  <li>
    <code>@layer</code> ルール (Cascade Layers) を用いた、スタイル適用順序の制御
  </li>
</ul>
<h3>JavaScript / TypeScript</h3>
<ul>
  <li>
    Vanilla Extract CSS
    <ul>
      <li>
        TypeScript コードとしてスタイルシートを記述し、ビルド時に対応する静的な
        CSS を生成できます。
      </li>
      <li>
        TypeScript
        の型検査器を活かして「誤ったプロパティ名を記述してしまう」「未定義の CSS
        変数を参照してしまう」等のミスを防ぐことができます。
      </li>
    </ul>
  </li>
  <li>
    Zod
    <ul>
      <li>実行時のバリデーションや TS の型定義の生成に利用しています</li>
      <li>
        このウェブサイトの一部ページは Markdown
        文書から静的に生成されていますが、その Frontmatter
        の検証に利用しています。
      </li>
    </ul>
  </li>
  <li>Svelte, SvelteKit</li>
  <li>Astro</li>
  <li>React</li>
  <li>Redux, redux-thunk, redux-saga</li>
  <li>Vue.js</li>
  <li>Cycle.js</li>
  <li>RxJS</li>
  <li>Elm</li>
</ul>
<h2>その他の、これまで触れてきた言語</h2>
<p>
  プログラミング言語そのものや、言語仕様の背景にある思想を知ることが大好きなので、これまで沢山のプログラミング言語に触れてきました
</p>
<ul>
  <li>Java</li>
  <li>Kotlin</li>
  <li>F#</li>
  <li>OCaml</li>
  <li>Haskell</li>
  <li>Rust</li>
  <li>FORTH</li>
  <li>Common Lisp</li>
  <li>Scheme / Racket</li>
  <li>Lua</li>
  <li>Gleam</li>
</ul>
