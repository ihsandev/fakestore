<template>
  <Navbar :is-detail="true" :title="product.title" />
  <section>
    <div class="w-full h-96 bg-white flex justify-center mb-3">
      <NuxtImg :src="product.image" class="h-96" />
    </div>
    <div class="px-6 py-6 bg-white">
      <h1 class="text-2xl mb-6">
        {{ product.title }}
      </h1>
      <div>
        <h2 class="text-lg text-slate-500 mb-3">Deskripsi Produk: </h2>
        <p class="leading-8">{{ product.description }}</p>
      </div>
    </div>
  </section>
  <BottomCheckout :price="product.price" />
</template>

<script setup>
  const { id } = useRoute().params
  const { baseURL } = useRuntimeConfig().public 
  const uri = `${baseURL}/products/${id}`
  const product = await $fetch(uri)
  definePageMeta({
    layout: 'detail-product'
  })
</script>

<style scoped>

</style>