<template>
  <div class="bg-white shadow-md overflow-hidden">
    <div class="h-40 overflow-hidden object-cover bg-slate-200 mb-2">
      <NuxtImg :src="image" class="w-full h-full" alt="product-image" />
    </div>
    <div class="p-3">
      <span class="text-white text-xs pb-1 bg-emerald-700 rounded-md px-2">{{ category }}</span>
      <h3 class="truncate my-2">{{ title }}</h3>
      <div>
        <h4 class="font-semibold text-slate-500">Rp. {{ Number.parseFloat(price).toFixed(2) }}</h4>
      </div>
    </div>
  </div>
</template>

<script setup>

  const { title, image, price, category } = defineProps([
    'title', 'image', 'price', 'category'
  ])

</script>

<style scoped>

</style>