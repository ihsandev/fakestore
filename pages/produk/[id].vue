<template>
  <Navbar :is-detail="true" :title="product.title" />
  <section class="py-16">
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
  <BottomCheckout :price="product.price" :on-buy-now="handleBuyNow" :is-product-exsist="isProductExist" />
  <Loading :show-loading="productStore.loading" />
</template>

<script setup>
import { useProductsStore } from '~~/stores/products';
import useProductExsist from '~~/composable/useProductExsist';

  const { id } = useRoute().params
  const { baseURL } = useRuntimeConfig().public 
  const uri = `${baseURL}/products/${id}`
  const product = await $fetch(uri)
  const productStore = useProductsStore()
  const { isProductExist } = useProductExsist(productStore.carts, id)

  onMounted(() => {
    productStore.getCarts()
  })

  const handleBuyNow = () => {
    productStore.addToCart(id, product)
  }

  definePageMeta({
    layout: 'detail-product'
  })
  
</script>

<style scoped>

</style>