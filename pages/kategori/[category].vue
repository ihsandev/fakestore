<template>
  <Navbar :is-detail="true" :title="category" />
  <section>
    <div class="flex-1 px-6">
      <div v-if="productStore.loading">Loading...</div>
      <div v-else class="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-between">
        <NuxtLink
          :to="`/produk/${product.id}`"
          v-for="product in productStore.productsCategory" :key="product.id"
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
</template>

<script setup>
import { useProductsStore } from '@/stores/products';

  const { category } = useRoute().params
  const productStore = useProductsStore()
  productStore.getProductsByCategory(category)

  definePageMeta({
    layout: 'detail-product'
  })
</script>

<style scoped>

</style>