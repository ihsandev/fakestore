<template>
  <header class="fixed top-0 mx-auto max-w-screen-md left-0 right-0">
    <nav :class="`flex gap-8 items-center py-2 px-8 ${navbarStyle ? 'bg-white' : showColor.bgColor} ${showColor.textColor}`">
      <div v-if="isDetail || isAuth" class="flex flex-1">
        <NuxtLink :class="`${isAuth ? 'bg-emerald-700 text-white w-10 h-10 flex items-center justify-center rounded-full' : ''}`" to="/">
          <span class="material-icons-outlined">
            arrow_back
          </span>
        </NuxtLink>
        <span v-if="isDetail" class="ml-3">{{ title }}</span>
      </div>
      <div v-else-if="isTransaction || isCategory || isAccount" class="flex flex-1 bg-slate-900 text-white">
        <div v-if="isTransaction">
          <span class="material-icons-outlined">
            tune
          </span>
        </div>
        <span :class="`${isTransaction && 'ml-3'} truncate`">{{ title }}</span>
      </div>
      <div v-else class="flex-1">
        <input 
          class="w-full py-1.5 px-6 rounded-full shadow-sm"
          placeholder="Cari barang.." 
        />
      </div>
     <Cart v-if="!isAuth" />
    </nav>
  </header>
</template>

<script setup>
  const {isDetail, isCategory, isTransaction, isAccount} = defineProps([
    'title', 
    'isDetail', 
    'isCategory',
    'isAuth',
    'isTransaction',
    'isAccount'
  ])

  const navbarStyle = ref(false)

  const doScroll = () => {
    const height = window.pageYOffset
    if(height > 200) {
      navbarStyle.value = true
    } else {
      navbarStyle.value = false
    }
  }

  const isUpdateScroll = !isDetail && !isCategory && !isTransaction && !isAccount && process.client;

  onMounted(() => {
    if(isUpdateScroll){
      window.addEventListener("scroll", doScroll);
    }
  })

  onUnmounted(() => {
    if(isUpdateScroll){
      window.removeEventListener("scroll", doScroll);  
    }
  })

  const showColor = computed(() => {
    let bgColor = '';
    let textColor = 'text-slate-900'
    if(isDetail) {
      bgColor = 'bg-white'
    } else if(isCategory || isTransaction || isAccount) {
      bgColor = 'bg-slate-900'
      textColor = 'text-white'
    }
    return {bgColor, textColor};
  })
</script>

<style scoped>

</style>