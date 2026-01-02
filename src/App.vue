<script setup lang="ts" vapor>
import { computed, ref } from 'vue';

const count = ref(0);

const message = computed(() => `Count: ${count.value}`);

const increment = () => {
  count.value++;
};
</script>

<template>
  <main>
    <h2>{{ message }}</h2>

    <button @click="increment">Increment</button>
  </main>
</template>

<style scoped>
h2 {
  color: #222;
}
</style>
