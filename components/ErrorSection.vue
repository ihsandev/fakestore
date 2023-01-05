<template>
  <div class="min-h-screen flex items-center">
    <div class="flex flex-col items-center bg-white md:mx-auto mx-2 md:w-1/2 p-10 self-center">
      <img :src="image || '/empty-data.png'" alt="empty-data" />
      <h2 class="text-slate-500 font-bold text-base md:text-xl text-center">{{ label }}</h2>
      <div v-if="actionLabel" class="mt-6">
        <NuxtLink :to="actionPath" class="py-2 px-6 bg-emerald-500 text-white rounded-md flex items-center text-sm md:text-base justify-center">
          <span class="material-icons-outlined mr-3">
            {{actionIcon}}
          </span>
          <span>{{actionLabel}}</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
  defineProps([
    'label', 'image', 'actionLabel', 'actionPath', 'actionIcon'
  ])
</script>