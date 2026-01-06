<template>
  <nav>
    <ul>
      <li>
        <NuxtLink to="/contact">{{ $t('連絡先') }}</NuxtLink>
      </li>
      <li>
        <a href="#">{{ $t('できること') }}</a>
      </li>
      <li>
        <a href="#">{{ $t('自分史') }}</a>
      </li>
      <li>
        <a href="#">{{ $t('私の"好き"') }}</a>
      </li>
      <li>
        <a href="#">{{ $t('技術デモ・著作') }}</a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
ul {
  margin: 0;
  padding: 0;
  display: flex;
  gap: 1rem;
  list-style: none;
}

a {
  color: inherit;
  text-decoration: underline;
}
</style>
