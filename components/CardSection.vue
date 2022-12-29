<template>
  <section class="bg-white p-6 my-2">
    <div class="mb-12 flex items-center justify-between text-slate-600">
      <div class="flex items-center">
        <span class="material-icons-outlined mr-1 text-sm">{{icon}}</span>
        <h2>{{title}}</h2>
      </div>
      <div v-if="showAllLink">
        <NuxtLink to="/produk">
          Lihat Semua Produk
        </NuxtLink>
      </div>
    </div>
    <slot />
  </section>
</template>

<script setup>
  const { title, icon, showAllLink } = defineProps(['title', 'icon', 'showAllLink'])
</script>

<style scoped>

</style>