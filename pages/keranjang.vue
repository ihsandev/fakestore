<template>
  <section v-if="auth.isLogin">
    <Navbar :is-detail="true" :title="'Keranjang'" />
    <div v-if="productStore.carts.length" class="py-16">
      <div class="grid gap-3 bg-white mx-8">
        <div v-for="(item, index) in productStore.carts" :key="index">
          <CartItem :cart="item">
            <div class="flex items-center gap-2">
              <Button :type="'counter'" :color="'border-red-700'" @click.stop="handleRemove(item, index)">-</Button>
              <Button :type="'counter'" @click.stop="handleAdd(item)">+</Button>
            </div>
          </CartItem>
        </div>
      </div>
    </div>
    <Loading v-if="productStore.loading" :show-loading="productStore.loading" />
    <ErrorSection 
      v-else-if="!productStore.loading && productStore.carts.length <= 0"
      :label="'Belum Ada Produk'" 
      :action-label="'Belanja Sekarang'" 
      :action-path="'/'" 
      :action-icon="'add_shopping_cart'" 
    />
    <BottomCheckout v-if="productStore.carts.length" :price="showTotalPrice" :is-checkout="true"/>
  </section>
</template>

<script setup>
import useAuth from '~~/composable/useAuth';
import { useProductsStore } from '~~/stores/products';

  const auth = useAuth()
  const productStore = useProductsStore()
  const showTotalPrice = computed(() => {
    const total = productStore.carts.reduce((a, b) => a + (b.price * b.qty), 0)
    return total;
  })

  const handleAdd = (product) => {
    productStore.increaseCart(product)
  }

  const handleRemove = (product, index) => {
    productStore.decreaseCart(product, index)
  }

  definePageMeta({
    layout: 'detail-product',
  })
</script>