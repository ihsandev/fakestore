<template>
  <section v-if="auth.isLogin">
    <Navbar :is-detail="true" :title="'Keranjang'" />
    <div class="grid gap-3 bg-white mx-8">
      <div v-for="(item, index) in productStore.carts" :key="index"
        class="flex justify-between items-center bg-white px-6 py-2 border-b-2 border-b-slate-100"
      >
        <div class="flex gap-6">
          <div class="h-20 w-16 overflow-hidden object-cover">
            <NuxtImg class="w-full h-full" :src="item.product.image" />
          </div>
          <div class="flex-1">
            <h2 class="font-semibold text-xs md:text-base">{{item.product.title}}</h2>
            <p>{{useFormatPrice(item.product.price)}}</p>
            <p class="text-sm text-slate-400">Qty: {{ item.qty }}</p>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <Button :type="'counter'" :color="'border-red-700'" @click.stop="handleRemove(index)">-</Button>
          <Button :type="'counter'" @click.stop="handleAdd(item)">+</Button>
        </div>
      </div>
    </div>
    <BottomCheckout :price="showTotalPrice" :is-checkout="true"/>
  </section>
</template>

<script setup>
import useAuth from '~~/composable/useAuth';
import useFormatPrice from '~~/composable/useFormatPrice';
import { useProductsStore } from '~~/stores/products';

  const auth = useAuth()
  const productStore = useProductsStore()
  const showTotalPrice = computed(() => {
    const total = productStore.carts.reduce((a, b) => a + (b.product.price * b.qty), 0)
    return total;
  })

  const handleAdd = (product) => {
    productStore.addToCart({...product.product, qyt: product.qty})
  }

  const handleRemove = (idx) => {
    productStore.removeCart(idx)
  }

  onMounted(() => {
    productStore.getCarts()
  })

  definePageMeta({
    layout: 'detail-product',
    middleware: 'auth',
  })
</script>