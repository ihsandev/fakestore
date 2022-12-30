<template>
  <AuthSection :title="'Daftar Akun'">
    <form @submit.prevent="handleSubmit" class="flex flex-col gap-6">
      <Input 
        :label="'Username Anda'"
        v-model:textValue="form.username"
        :placeholder="'Masukkan Username'"
        :required="true"
      />
      <Input 
        :label="'Password Anda'"
        v-model:textValue="form.password"
        :placeholder="'Masukkan Password'"
        :required="true"
        :type="'password'"
      />
      <div class="mt-6">
        <button class="py-2 px-6 w-full bg-emerald-700 text-white rounded-md" type="submit">Login</button>
      </div>
    </form>
    <div class="w-full text-center mt-6">
      <p class="text-slate-500 mb-2">Sudah Punya Akun ?</p>
      <NuxtLink to="/auth/login" class="text-emerald-700 font-medium">
        <p>Login disini</p>
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
  }

  definePageMeta({
    layout: 'auth'
  })
</script>