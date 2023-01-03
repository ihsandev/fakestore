<template>
  <div class="flex justify-between items-center bg-white px-6 py-2 border-b-2 border-b-slate-100">
    <div class="flex gap-6">
      <div class="h-20 w-16 overflow-hidden object-cover">
        <NuxtImg class="w-full h-full" :src="cart.image" />
      </div>
      <div class="flex-1">
        <h2 class="font-semibold text-xs md:text-base">{{cart.title}}</h2>
        <p>{{useFormatPrice(cart.price)}}</p>
        <p class="text-sm text-slate-400">Qty: {{ cart.qty }}</p>
      </div>
    </div>
    <slot />
  </div>
</template>

<script setup>
import useFormatPrice from '~~/composable/useFormatPrice';

  defineProps([
    'cart'
  ])
</script>