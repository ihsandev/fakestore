<template>
  <section class="min-h-screen flex items-center">
    <div class="bg-white w-full mx-4 md:w-3/5 md:mx-auto p-10 shadow-sm rounded-lg">
      <div class="flex flex-col md:flex-row items-center mb-6">
        <span v-if="loading">
          <Spinner />
        </span>
        <span v-else :class="`material-icons-outlined text-7xl ${iconColor || 'text-orange-500'}`">
          {{icon || 'security'}}
        </span>
        <h1 class="md:ml-4 md:text-4xl font-extrabold text-slate-800 capitalize">{{title}}</h1>
      </div>
      <slot />
    </div>
  </section>
</template>

<script setup>
  defineProps([
    'title',
    'icon',
    'iconColor',
    'loading'
  ])
</script>