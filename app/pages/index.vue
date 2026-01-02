<script setup lang="ts">
useHead({
  title: 'Kodai のウェブサイト',
});

const { t } = useI18n();

const count = ref(0);

const message = computed(() => `${t('カウント')}: ${count.value}`);

function increment() {
  count.value++;
}
</script>

<template>
  <h2>{{ message }}</h2>

  <button @click="increment">{{ $t('増加') }}</button>
</template>
