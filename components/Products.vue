<template>
  <CardSection :title="'Produk Terbaru'" :icon="'dashboard'" :show-all-link="true">
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
  </CardSection>
</template>

<script setup>
  import { useProductsStore } from '@/stores/products';
  const productStore = useProductsStore()
  productStore.getProducts({limit: 8})
</script>

<style scoped>

</style>