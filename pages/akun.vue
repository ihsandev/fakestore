<template>
  <AuthSection v-if="authStore.loading" :title="'Loading..'" :loading="true">
  </AuthSection>
  <AuthSection v-if="!auth.isLogin" :title="'Anda Belum Login'">
    <div class="mt-6">
      <NuxtLink to="/auth/login">
        <button class="py-2 px-6 w-full bg-emerald-700 text-white rounded-md">Login Sekarang</button>
      </NuxtLink>
    </div>
  </AuthSection>
  <AuthSection v-if="authStore.user" :title="`Welcome ${authStore.user.name.firstname}`" :icon="'verified_user'" :icon-color="'text-emerald-500'">
    <div class="mt-6">
      <button class="py-2 px-6 w-full bg-orange-500 text-white rounded-md" @click="authStore.logout">Logout</button>
    </div>
  </AuthSection>
</template>

<script setup>
import useAuth from '~~/composable/useAuth';
import { useAuthStore } from '~~/stores/auth';

  const authStore = useAuthStore()
  const auth = useAuth()

  onMounted(() => {
    authStore.getUser()
  })

</script>

<style scoped>

</style>