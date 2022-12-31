<template>
  <NuxtLink class="relative" :to="auth.isLogin ? '/keranjang' : '/auth/login'">
    <span class="material-icons-outlined text-2xl">
      shopping_cart
    </span>
    <span v-if="auth.isLogin && counterCart > 0" class="counter-cart">
      {{counterCart > 99 ? '99+' : counterCart}}
    </span>
  </NuxtLink>
</template>

<script setup>
import useAuth from '~~/composable/useAuth';
import { useProductsStore } from '~~/stores/products';

  const auth = useAuth()
  const productStore = useProductsStore()

  const counterCart = computed(() => {
    return productStore.carts.reduce((a,b) => a + b.qty, 0)
  })

  onMounted(() => {
    productStore.getCarts()
  })
</script>

<style scoped>

</style>