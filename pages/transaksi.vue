<template>
  <div>
    <ErrorSection
      :label="'Silahkan Login Untuk Melihat Transaksi'" 
      :action-label="'Login Sekarang'" 
      :action-path="'/auth/login'" 
      :action-icon="'login'" 
    />
  </div>
</template>

<script setup>
import useAuth from '~~/composable/useAuth';

  const auth = useAuth()
</script>

<style scoped>

</style>