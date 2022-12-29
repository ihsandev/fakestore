<template>
  <NuxtLink 
    v-if="isCategory" :to="link" 
    class="flex flex-col items-center text-white bg-gradient-to-r from-emerald-700 to-emerald-500 w-24 h-24 p-2 text-center rounded-full justify-center"
  >
    <span class="material-icons-outlined mb-1">{{name || 'pageview'}}</span>
    <p class="text-sm">{{label}}</p>
  </NuxtLink>
  <div v-else-if="isButton" 
    @click="$emit('selectCategory', idCategory)"
    :class="`flex flex-col items-center py-2 ${activeTab === idCategory ? 'text-emerald-700' : 'text-slate-500'} cursor-pointer`"
  >
    <span class="material-icons-outlined mb-1">{{name || 'pageview'}}</span>
    <p class="text-sm">{{showLabel}}</p>
  </div>
  <NuxtLink v-else :to="link" class="flex flex-col items-center py-2 text-slate-500">
    <span class="material-icons-outlined mb-1">{{name || 'pageview'}}</span>
    <p class="text-sm">{{label}}</p>
  </NuxtLink>
</template>

<script setup>
  const { name, label, link, isCategory, idCategory, activeTab } = defineProps([
    'name', 'label', 'link', 'isCategory', 'isButton', 'idCategory', 'activeTab'
  ])
  const showLabel = computed(() => {
    return label.substring(0, 5) + '..'
  })
</script>

<style scoped>

</style>