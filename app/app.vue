<script setup lang="ts">
const head = useLocaleHead();

useHead({
  htmlAttrs: {
    lang: computed(() => head.value.htmlAttrs.lang),
  },
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
