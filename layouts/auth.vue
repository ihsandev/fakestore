<template>
  <section class="mx-auto max-w-screen-md bg-slate-100">
    <Navbar :is-auth="true" />
    <div class="min-h-screen">
      <slot />
    </div>
  </section>
  <Loading :show-loading="loadingAuth.loading" />
</template>

<script setup>
import { useAuthStore } from '~~/stores/auth';

  const loadingAuth = useAuthStore()
</script>