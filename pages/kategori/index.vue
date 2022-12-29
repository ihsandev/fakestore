<template>
  <section class="flex">
    <div class="px-1 bg-slate-200 min-h-screen pt-14">
      <IconMenu 
        v-for="(cat, index) in categories" 
        :key="index" 
        :id-category="cat.name"
        :link="`/kategori/${cat.name}`"
        :label="cat.label"
        :name="cat.icon"
        :is-button="true"
        :active-tab="category"
        @select-category="handleSelectCategory"
      />
    </div>
    <div class="flex-1 pt-16 px-6">
      <div v-if="productStore.loading">Loading...</div>
      <div v-else class="grid grid-cols-4 gap-6 items-center justify-between">
        <NuxtLink
          :to="`/produk/${product.id}`"
          v-for="product in productStore.productsCategory" :key="product.id"
        >
          <CardProduct 
            :title="product.title"
            :price="product.price"
            :image="product.image"
            :category="product.category"
          />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
  import useCategories from '@/composable/useCategories'
  import { useProductsStore } from '@/stores/products';
  
  const categories = await useCategories()
  const category = ref(categories[0].name)

  const productStore = useProductsStore()

  onMounted(() => {
    productStore.getProductsByCategory(category.value)
  })

  watch(category, () => {
    productStore.getProductsByCategory(category.value)
  })
  
  const handleSelectCategory = (id) => {
    category.value = id
  }

  definePageMeta({
    layout: 'base'
  })
</script>

<style scoped>

</style>