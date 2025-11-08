<script lang="ts">
  import { ExternalLink } from '~/components';

  const title = '趣味 | Kodai のウェブサイト';
  const description = 'Kodai の趣味について掲載しています。';
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta name="og:title" content={title} />
  <meta name="og:description" content={description} />
  <meta name="og:url" content="https://kodai.engineer/hobbies" />
</svelte:head>

<h1>趣味</h1>
<h2>技術</h2>
<ul>
  <li>
    いろいろなプログラミング言語に触れる
    <ul>
      <li>OCaml, F#</li>
      <li>Haskell, PureScript, Elm</li>
      <li>Common Lisp, Scheme, Racket, Clojure</li>
      <li>FORTH</li>
      <li>Rust</li>
      <li>JavaScript, TypeScript</li>
      <li>Java, Kotlin, Scala</li>
      <li>Lua</li>
    </ul>
  </li>
  <li>
    Obsidian プラグインの開発
    <ul>
      <li>
        <ExternalLink
          url="https://github.com/0918nobita/obsidian-zhongwen-block"
          label="Zhongwen Block プラグイン"
        />
      </li>
    </ul>
  </li>
</ul>
<h2>語学</h2>
<ul>
  <li>
    中国語の学習
    <ul>
      <li>HSK４級取得に向けて独学で勉強中</li>
    </ul>
  </li>
</ul>
<h2>音楽・美術</h2>
<ul>
  <li>
    作曲DTM
    <ul>
      <li>
        SoundCloud でオリジナル曲を公開しています → <ExternalLink
          url="https://soundcloud.com/0918nobita/tonaris-diary"
          label="Tonari's Diary / Kodai"
        />
      </li>
    </ul>
  </li>
  <li>
    エレキベースの演奏
    <ul>
      <li>
        <ExternalLink
          url="https://twitter.com/0918nobita/status/1612357490985046016"
          label="(Twitter) 愛用しているベース"
        />
      </li>
    </ul>
  </li>
  <li>デジタルイラストを描く</li>
  <li>
    音楽鑑賞
    <ul>
      <li>Artcore</li>
      <li>Neurofunk</li>
      <li>Breakcore</li>
      <li>Industrial</li>
      <li>Schranz</li>
      <li>Ambient</li>
    </ul>
  </li>
</ul>
<h2>ゲーム</h2>
<ul>
  <li>アークナイツ</li>
  <li>Arcaea</li>
  <li>ENDER LILIES</li>
  <li>Turing Complete</li>
  <li>(過去にハマっていたゲーム) ダンボール戦機</li>
</ul>
<h2>その他サブカルチャー系</h2>
<ul>
  <li>VTuber の配信を見る</li>
  <li>
    アニメ観賞
    <ul>
      <li>魔法少女まどか☆マギカ</li>
      <li>PSYCHO-PASS</li>
      <li>ガンダムシリーズ (SEED, 00, 水星の魔女, …)</li>
    </ul>
  </li>
  <li>ガンプラ製作 (小学生の頃からずっと)</li>
</ul>
