<template>
  <AuthSection :title="'Login'">
    <Alert v-if="authStore.error" :type="'error'" :message="authStore.error" class="mb-4" />
    <form @submit.prevent="handleSubmit" class="flex flex-col gap-6">
      <Input 
        :label="'Username Anda'"
        v-model:textValue="form.username"
        :placeholder="'akun demo gunakan mor_2314'"
        :required="true"
      />
      <Input 
        :label="'Password Anda'"
        v-model:textValue="form.password"
        :placeholder="'akun demo gunakan 83r5^_'"
        :required="true"
        :type="'password'"
      />
      <div class="mt-6">
        <button class="py-2 px-6 w-full bg-emerald-700 text-white rounded-md" type="submit">Login</button>
      </div>
    </form>
    <div class="w-full text-center mt-6">
      <p class="text-slate-500 mb-2">Belum Punya Akun ?</p>
      <NuxtLink to="/auth/daftar" class="text-emerald-700 font-medium">
        <p>Daftar disini</p>
      </NuxtLink>
    </div>
  </AuthSection>
</template>

<script setup>
import { useAuthStore } from '~~/stores/auth';

  const form = ref({
    username: '',
    password: ''
  })

  const authStore = useAuthStore()
  const handleSubmit = () => {
    authStore.login(form.value)
      .then(() => {
        form.value.username = ''
        form.value.password = ''
      })
  }

  definePageMeta({
    layout: 'auth',
  })
</script>