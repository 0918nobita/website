<script setup lang="ts">
useHead({
  title: '連絡先 | Kodai のウェブサイト',
});
</script>

<template>
  <h2>{{ $t('連絡先') }}</h2>

  <ul>
    <li>Gmail：<a href="mailto:nobita.0918@gmail.com">nobita.0918@gmail.com</a></li>

    <li>
      X (Twitter)：<a href="https://x.com/0918nobita" target="_blank" rel="noopener noreferrer"
        >@0918nobita</a
      >
    </li>
  </ul>
</template>

<style scoped>
h2 {
  margin: 0;
}

ul {
  margin: 0;
}
</style>
