<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
      <Loading :show-loading="loading" />
    </NuxtLayout>
  </div>
</template>

<script setup>
  const nuxtApp = useNuxtApp()
  const loading = ref(false)
  nuxtApp.hook('page:start', () => loading.value = true)
  nuxtApp.hook('page:finish', () => loading.value = false)
</script>
