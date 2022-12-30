<template>
  <section class="bg-white fixed bottom-0 left-0 right-0 mx-auto max-w-screen-md flex">
    <div class="text-center bg-orange-300 flex md:w-80 items-center justify-center py-2 px-6">
      <h4 class="text-1xl md:text-4xl">Rp. {{ Number.parseFloat(price).toFixed(2) }}</h4>
    </div>
    <div v-if="auth.isLogin" class="bg-emerald-700 text-white flex-1 flex items-center justify-center cursor-pointer">
      <span class="material-icons-outlined mr-3">
        shopping_cart_checkout
      </span>
      <span>Checkout</span>
    </div>
    <NuxtLink v-else to="/auth/login" class="bg-emerald-700 text-white flex-1 flex items-center justify-center">
      <span class="material-icons-outlined mr-3">
        shopping_cart_checkout
      </span>
      <span>Checkout</span>
    </NuxtLink>
  </section>
</template>

<script setup>
import useAuth from '~~/composable/useAuth';

  const { price, id } = defineProps(['price', 'id'])
  const auth = useAuth()
</script>

<style scoped>

</style>