<template>
  <section class="bg-white fixed bottom-0 left-0 right-0 mx-auto max-w-screen-md flex">
    <div class="text-center bg-orange-300 flex md:w-80 items-center justify-center py-2 px-6">
      <h4 class="text-1xl md:text-4xl">{{ useFormatPrice(price) }}</h4>
    </div>
    <div v-if="auth.isLogin && isCheckout" @click.stop="onCheckout" class="bg-emerald-700 text-white flex-1 flex items-center justify-center cursor-pointer py-2">
      <span class="material-icons-outlined mr-3">
        shopping_cart_checkout
      </span>
      <span>Lanjut Checkout</span>
    </div>
    <NuxtLink v-else-if="auth.isLogin && isProductExsist" to="/keranjang" class="bg-emerald-700 text-white flex-1 flex items-center justify-center py-2">
      <span class="material-icons-outlined mr-3">
        shopping_cart
      </span>
      <span>Lihat Keranjang</span>
    </NuxtLink>
    <div v-else-if="auth.isLogin" @click="onBuyNow" class="bg-emerald-700 text-white flex-1 flex items-center justify-center cursor-pointer py-2">
      <span class="material-icons-outlined mr-3">
        add_shopping_cart
      </span>
      <span>Beli Sekarang</span>
    </div>
    <NuxtLink v-else to="/auth/login" class="bg-emerald-700 text-white flex-1 flex items-center justify-center py-2">
      <span class="material-icons-outlined mr-3">
        add_shopping_cart
      </span>
      <span>Beli Sekarang</span>
    </NuxtLink>
  </section>
</template>

<script setup>
import useAuth from '~~/composable/useAuth';
import useFormatPrice from '~~/composable/useFormatPrice';

  const { price } = defineProps(['price', 'id', 'onBuyNow', 'isProductExsist', 'isCheckout', 'onCheckout'])
  const auth = useAuth()
 
</script>

<style scoped>

</style>