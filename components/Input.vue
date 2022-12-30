<template>
  <div class="grid">
    <label class="mb-3">{{label}} <span v-if="required" class="text-red-700">*</span></label>
    <input 
      class="w-full py-1.5 px-6 rounded-full shadow-sm" 
      :value="textValue" 
      @input="$emit('update:textValue', $event.target.value)"
      :type="type" 
      :placeholder="placeholder" 
      :required="required" 
    />
  </div>
</template>
<script setup>
  defineProps([
    'label', 
    'required', 
    'type', 
    'textValue', 
    'placeholder'
  ])
</script>