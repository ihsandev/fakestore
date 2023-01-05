<template>
  <Navbar :is-category="true" :title="'Transaksi'" />
  <div>
    <div v-if="auth.isLogin">
      <div v-if="productStore.transactions.length" class="py-16">
        <div v-for="(transaction, index) in productStore.transactions" 
          :key="index"
          class="grid gap-3 mx-8 bg-slate-200 mb-6 pt-2 px-2">
          <div class="flex items-center justify-between">
            <span class="text-white bg-emerald-700 rounded-md flex text-center items-center px-1 text-sm pb-1">{{transaction.status}}</span>
            <h2 class="font-medium text-slate-500">ID Transaksi: <span class="text-slate-700">#{{transaction.id}}</span></h2>
          </div>
          <div v-for="(item, idx) in transaction.products" :key="idx">
            <CartItem :cart="item" />
          </div>
        </div>
      </div>
      <ErrorSection 
        v-else-if="!productStore.loading && productStore.transactions.length <= 0"
        :label="'Belum Ada Transaksi'" 
        :action-label="'Belanja Sekarang'" 
        :action-path="'/'" 
        :action-icon="'add_shopping_cart'" 
      />
    </div>
    <ErrorSection
      v-else
      :label="'Silahkan Login Untuk Melihat Transaksi'" 
      :action-label="'Login Sekarang'" 
      :action-path="'/auth/login'" 
      :action-icon="'login'" 
    />
  </div>
</template>

<script setup>
import useAuth from '~~/composable/useAuth';
import { useProductsStore } from '~~/stores/products';

  const auth = useAuth()
  const productStore = useProductsStore()

  onMounted(() => {
    productStore.getTransactions()
  })

  definePageMeta({
    layout: 'base'
  })
</script>

<style scoped>

</style>