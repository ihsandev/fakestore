<template>
  <CardSection :title="'Kategori'" :icon="'category'">
    <div class="grid gap-6 grid-cols-3 md:grid-cols-4 justify-items-center justify-between w-full">
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
import { useProductsStore } from '~~/stores/products';

  const productStore = useProductsStore()
  productStore.getCategories()

</script>

<style scoped>

</style>