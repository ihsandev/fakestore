<template>
  <Navbar :is-detail="true" title="Semua Produk" />
  <section class="pb-28">
    <div class="flex-1 px-6">
      <div v-if="productStore.loading">Loading...</div>
      <div v-else class="grid grid-cols-4 gap-6 items-center justify-between">
        <NuxtLink
          :to="`/produk/${product.id}`"
          v-for="product in productStore.products" :key="product.id"
        >
          <CardProduct 
            :title="product.title"
            :price="product.price"
            :image="product.image"
            :category="product.category"
          />
        </NuxtLink>
      </div>
    </div>
  </section>
  <BottomMenu />
</template>

<script setup>
  import { useProductsStore } from '@/stores/products';

  const productStore = useProductsStore()
  productStore.getProducts()

  definePageMeta({
    layout: 'detail-product'
  })
</script>

<style scoped>

</style>