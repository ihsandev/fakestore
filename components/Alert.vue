<template>
  <div :class="`${showColor.bgColor} py-1.5 px-4 rounded-md ${showColor.textColor} my-1`">
    <h6 v-if="title">{{ title }}</h6>
    <p>{{ message }}</p>
  </div>
</template>

<script setup>
  const { type } = defineProps([
    'title',
    'message',
    'type'
  ])

  const showColor = computed(() => {
    let textColor = 'text-emerald-700'
    let bgColor = 'bg-emerald-100'

    if(type === 'error') {
      textColor = 'text-red-700';
      bgColor = 'bg-red-100'
    }

    return {
      textColor,
      bgColor
    }
  })
</script>