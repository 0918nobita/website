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
