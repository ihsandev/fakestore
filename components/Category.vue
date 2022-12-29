<template>
  <CardSection :title="'Kategori'" :icon="'category'">
    <div class="grid grid-cols-4 justify-items-center justify-between w-full">
      <IconMenu 
        v-for="(category, index) in productStore.categories" 
        :key="index" 
        :link="`/kategori/${category.name}`"
        :label="category.label"
        :name="category.icon"
        :is-category="true"
      />
    </div>
  </CardSection>
</template>

<script setup>
  import { useProductsStore } from '@/stores/products';

  const productStore = useProductsStore()
  productStore.getCategories()

  console.log(productStore.categories)
</script>

<style scoped>

</style>