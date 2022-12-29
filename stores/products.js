import useProducts from "@/composable/useProducts"
import useCategories from "@/composable/useCategories"
import useProductsCategory from "@/composable/useProductsCategory"

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [],
    categories: [],
    productsCategory: [],
    loading: false,
  }),

  actions: {
    async getProducts(params) {
      try {
        this.loading = true
        const products = await useProducts(params)
        this.products = products
      } catch (error) {
        return error;
      } finally {
        this.loading = false
      }
    },
    async getCategories() {
      try {
        this.loading = true
        const categories = await useCategories()
        this.categories = categories
      } catch (error) {
        return error;
      } finally {
        this.loading = false
      }
    },
    async getProductsByCategory(category) {
      try {
        this.loading = true
        const response = await useProductsCategory(category)
        this.productsCategory = response
      } catch (error) {
        throw Error(error.message)
      } finally {
        this.loading = false
      }
    }
  }
})