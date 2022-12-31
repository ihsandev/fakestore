import useProducts from "@/composable/useProducts"
import useCategories from "@/composable/useCategories"
import useProductsCategory from "@/composable/useProductsCategory"
import useLocalStorage from "~~/composable/useLocalStorage"
import useProductExsist from "~~/composable/useProductExsist"

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [],
    categories: [],
    productsCategory: [],
    loading: false,
    carts: []
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
    },
    addToCart(product) {
      const { setStorage } = useLocalStorage()
      const newData = [...this.carts]
      const { index, isProductExist } = useProductExsist(newData, product.id)
      if(isProductExist) {
        newData[index].qty++
      } else {
        newData.push({product, qty: 1})
      }
      this.carts = newData
      setStorage('carts', newData)
    },
    getCarts() {
      const { getStorage } = useLocalStorage()
      const data = getStorage('carts')
      if(data) {
        this.carts = data
      }
    },
    removeCart(idx) {
      const { setStorage } = useLocalStorage()
      const newData = [...this.carts]
      if(newData[idx].qty > 1) {
        newData[idx].qty--
      } else {
        newData.splice(idx, 1)
      }
      this.carts = newData
      setStorage('carts', newData)
    }
  }
})