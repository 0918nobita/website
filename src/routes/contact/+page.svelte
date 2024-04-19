<script lang="ts">
  import { ExternalLink } from '~/components';
</script>

<svelte:head>
  <title>連絡先 | Kodai のウェブサイト</title>
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
