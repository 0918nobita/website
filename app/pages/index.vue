<script setup lang="ts">
import type { Locale } from '@intlify/core-base';

useHead({
  title: 'Kodai のウェブサイト',
});

const { t, setLocale } = useI18n();

const count = ref(0);
const message = computed(() => `${t('カウント')}: ${count.value}`);

function increment() {
  count.value++;
}

async function setLocaleTo(locale: Locale) {
  try {
    await setLocale(locale);
  } catch (error) {
    console.error('Failed to switch locale');
    console.error(error);
  }
}
</script>

<template>
  <h2>{{ message }}</h2>

  <button @click="increment">{{ $t('増加') }}</button>

  <ul>
    <li>
      <button @click="setLocaleTo('ja')">日本語</button>
    </li>
    <li>
      <button @click="setLocaleTo('en')">English</button>
    </li>
    <li>
      <button @click="setLocaleTo('zh-CN')">中文</button>
    </li>
  </ul>
</template>

<style scoped>
h2 {
  margin: 0;
}
</style>
