<script lang="ts">
  import { ExternalLink } from "~/components";

  const title = "連絡先 | Kodai のウェブサイト";
  const description = "Kodai の連絡先について掲載しています。";
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta name="og:title" content={title} />
  <meta name="og:description" content={description} />
  <meta name="og:url" content="https://kodai.engineer/contact" />
</svelte:head>

<h1>連絡先</h1>
<ul>
  <li>
    <a href="mailto:nobita.0918@gmail.com">Gmail</a>
  </li>
  <li>
    X (Twitter)：
    <ExternalLink url="https://twitter.com/0918nobita" label="@0918nobita" />
  </li>
  <li>
    Bluesky：
    <ExternalLink
      url="https://bsky.app/profile/kodai.engineer"
      label="@kodai.engineer"
    />
  </li>
</ul>
