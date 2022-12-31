<template>
  <span 
    v-if="type === 'counter'"
    :class="`flex items-center justify-center border-2 ${color || 'border-emerald-700'} w-6 h-6 rounded-full font-semibold pb-1 cursor-pointer`">
    <slot/>
  </span>
</template>


<script setup>
  defineProps(['type', 'color'])
</script>