<template>
  <div
    v-if="showLoading"
    class="fixed left-0 right-0 top-0 bottom-0 mx-auto z-50 max-w-screen-md bg-opacity-70 bg-white flex items-center">
    <Spinner />
  </div>
</template>

<script setup>
  defineProps([
    'showLoading'
  ])
</script>