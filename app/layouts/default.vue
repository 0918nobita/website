<script setup lang="ts">
import Navigation from '~/components/Navigation.vue';
</script>

<template>
  <header>
    <h1>
      <NuxtLink to="/">{{ $t('Kodai のウェブサイト') }}</NuxtLink>
    </h1>

    <Navigation />
  </header>

  <main>
    <slot />
  </main>
</template>

<style scoped>
h1 {
  margin: 0;
}

a {
  color: inherit;
  text-decoration: none;
}
</style>
