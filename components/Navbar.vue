<template>
  <header class="fixed top-0 mx-auto max-w-screen-md left-0 right-0">
    <nav :class="`flex gap-8 items-center py-2 px-8 ${showColor.bgColor} ${showColor.textColor}`">
      <div v-if="isDetail" class="flex flex-1">
        <NuxtLink to="/">
          <span class="material-icons-outlined">
            arrow_back
          </span>
        </NuxtLink>
        <span class="ml-3 truncate">{{ title }}</span>
      </div>
      <div v-else-if="isCategory" class="flex flex-1 bg-slate-900 text-white">
        <div>
          <span class="material-icons-outlined">
            search
          </span>
        </div>
        <span class="ml-3 truncate">{{ title }}</span>
      </div>
      <div v-else class="flex-1">
        <input 
          class="w-full py-1.5 px-6 rounded-full shadow-sm"
          placeholder="Cari barang.." 
        />
      </div>
     <Cart />
    </nav>
  </header>
</template>

<script setup>
  const { isDetail, isCategory, title } = defineProps(['isDetail', 'title', 'isCategory'])
  const showColor = computed(() => {
    let bgColor = '';
    let textColor = 'text-slate-900'
    if(isDetail) {
      bgColor = 'bg-white'
    } else if(isCategory) {
      bgColor = 'bg-slate-900'
      textColor = 'text-white'
    }
    return {bgColor, textColor};
  })
</script>

<style scoped>

</style>