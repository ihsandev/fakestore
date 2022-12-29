<template>
  <footer class="bg-white fixed bottom-0 left-0 right-0 mx-auto max-w-screen-md flex items-center justify-around">
    <IconMenu 
      v-for="menu in listMenu" 
      :key="menu.path" 
      :name="menu.icon" 
      :label="menu.label" 
      :link="menu.path" 
    />
  </footer>
</template>

<script setup>
  const listMenu = [
    {
      path: '/',
      icon: 'home',
      label: 'Beranda'
    },
    {
      path: '/kategori',
      icon: 'category',
      label: 'Kategori'
    },
    {
      path: '/toko-saya',
      icon: 'storefront',
      label: 'Toko Saya'
    },
    {
      path: '/transaksi',
      icon: 'receipt_long',
      label: 'Transaksi'
    },
    {
      path: '/akun',
      icon: 'account_circle',
      label: 'Akun'
    }
  ]
</script>

<style scoped>
  .router-link-active {
    color: var(--primary);
    font-weight: 600;
  }
</style>