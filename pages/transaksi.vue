<template>
  <Navbar :is-transaction="true" :title="'Transaksi'" />
  <div>
    <div v-if="auth.isLogin">
      <div v-if="productStore.transactions.length" class="py-16">
        <div v-for="(transaction, index) in productStore.transactions" 
          :key="index"
          :class="`grid gap-3 mx-8 ${showStatusTransaction(transaction.status, transaction.isPay).bgColor} mb-6 py-2 px-3`">
          <div class="flex items-center justify-between">
            <span :class="`text-white ${showStatusTransaction(transaction.status, transaction.isPay).color} rounded-md flex text-center items-center px-2 text-sm pb-1`">
              {{showStatusTransaction(transaction.status, transaction.isPay).labelStatus}}
            </span>
            <h2 class="font-medium text-slate-500 text-sm md:text-base">ID Transaksi: <span class="text-slate-700 flex">#{{transaction.id}}</span></h2>
          </div>
          <div v-for="(item, idx) in transaction.products" :key="idx">
            <CartItem :cart="item" />
          </div>
          <div v-if="!transaction.isPay" class="flex items-center justify-between">
            <h2 class="font-bold text-lg">Total: {{useTotalPrice(transaction.products)}}</h2>
            <button 
              class="py-2 px-6 bg-emerald-700 text-white rounded-md"
              @click.stop="handlePayNow(transaction, index)"
              >Bayar Sekarang
            </button>
          </div>
          <div v-else class="flex items-center justify-end">
            <h2 class="font-bold text-lg">Total Bayar: {{useTotalPrice(transaction.products)}}</h2>
          </div>
        </div>
      </div>
      <Loading v-if="productStore.loading" :show-loading="productStore.loading" />
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
import { useTotalPrice } from '~~/composable/useGlobalFunction'

  const auth = useAuth()
  const productStore = useProductsStore()

  const showStatusTransaction = (status, isPay) => {
    let labelStatus = ''
    let color = ''
    let bgColor = ''
    if(status === 'oncheckout' && !isPay) {
      labelStatus = 'Belum Bayar'
      color = 'bg-orange-700'
      bgColor = 'bg-slate-200'
    }
    if(status === 'oncheckout' && isPay) {
      labelStatus = 'Sudah Bayar'
      color = 'bg-emerald-600'
      bgColor = 'bg-emerald-100'
    }
    return {
      labelStatus,
      color,
      bgColor
    };
  }

  const handlePayNow = (transaction, idx) => {
    productStore.payNow(transaction, idx)
  }

  onMounted(() => {
    productStore.getTransactions()
  })

  definePageMeta({
    layout: 'base'
  })
</script>

<style scoped>

</style>