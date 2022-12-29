<template>
  <section class="bg-white fixed bottom-0 left-0 right-0 mx-auto max-w-screen-md flex">
    <div class="text-center bg-orange-300 flex w-80 items-center justify-center py-2 px-6">
      <h4 class="text-4xl">Rp. {{ Number.parseFloat(price).toFixed(2) }}</h4>
    </div>
    <div class="bg-emerald-700 text-white flex-1 flex items-center justify-center cursor-pointer">
      <span class="material-icons-outlined mr-3">
        shopping_cart_checkout
      </span>
      <span>Checkout</span>
    </div>
  </section>
</template>

<script setup>
  const { price, id } = defineProps(['price', 'id'])
</script>

<style scoped>

</style>