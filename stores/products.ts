import useProducts from "~~/composable/useProducts"
import useCategories from "~~/composable/useCategories"
import useProductsCategory from "~~/composable/useProductsCategory"
import useProductExsist from "~~/composable/useProductExsist"
import useToken from "~~/composable/useToken"
import { uniqueId } from "~~/composable/useGlobalFunction"

export const useProductsStore = defineStore('products', {
  state: ():any => ({
    products: [],
    categories: [],
    productsCategory: [],
    loading: false,
    carts: [],
    transactions: []
  }),

  actions: {
    async getProducts(params:any) {
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
    async getProductsByCategory(category:string) {
      try {
        this.loading = true
        const response = await useProductsCategory(category)
        this.productsCategory = response
      } catch (error:any) {
        throw Error(error.message)
      } finally {
        this.loading = false
      }
    },
    async addToCart(id:number, product:any) {
      const newData:any = [...this.carts]
      const userToken = useToken()
      try {
        this.loading = true
        const payload = {
          ...product, 
          qty: 1, 
          id, 
          userId: userToken.user.sub,
          status: 'oncart'
        }
        const data = await $fetch('/api/add-cart', {method: 'POST', body: payload})
        if(data.success) {
          newData.push(payload)
          this.carts = newData
          navigateTo('/keranjang')
        }
      } catch (error) {
        return error;
      } finally {
        this.loading = false
      }
    },
    async getCarts() {
      const userToken = useToken()
      try {
        this.loading = true
        const res = await $fetch('/api/carts')
        const data = res.data.filter((item:any) => item.userId === userToken.user.sub && item.status === 'oncart')
        if(res.data) {
          this.carts = data
        }
      } catch (error) {
        return error;        
      } finally {
        this.loading = false
      }
    },
    async increaseCart(product:any) {
      const newData:any = [...this.carts]
      const { index, isProductExist } :any = useProductExsist(newData, product.id)
      const data = await $fetch(`/api/update-cart-qty?id=${product.id}`, {method: 'PUT', body: {qty: 1}})
      if(data.success) {
        if(isProductExist) {
          newData[index].qty++
        }
        this.carts = newData
      }
    },
    async decreaseCart(product:any, idx: number) {
      const newData = [...this.carts]
      if(product.qty > 1 && newData[idx].qty > 1) {
        const data = await $fetch(`/api/update-cart-qty?id=${product.id}`, {method: 'PUT', body: {qty: -1}})
        if(data.success) {
          newData[idx].qty--
        }
      } else {
        const data = await $fetch(`/api/delete-cart?id=${product.id}`, {method: 'DELETE'})
        if(data.success) {
          newData.splice(idx, 1)
        }
      }
      this.carts = newData
    },
    async checkoutCart(data:any) {
      const newData:any = [...this.transactions]
      const userToken = useToken()
      try {
        const newdataProducts = data && data.map((item:any) => ({
          ...item,
          status: 'oncheckout'
        }))
        const userId = userToken.user.sub;
        this.loading = true
        const payload = {
          id: uniqueId(),
          userId,
          status: 'oncheckout',
          products: newdataProducts
        }
        const res = await $fetch('/api/add-transaction', {method: 'POST', body: payload})
        if(res.success) {
          newData.push(payload)
          this.transactions = newData
          navigateTo('/transaksi')
        }
        const resCart = await $fetch(`/api/delete-carts?userId=${userId}`, {method: 'DELETE'})
        if(resCart.success) {
          const newDataCarts = [...this.carts, {status: 'oncheckout'}]
          this.carts = newDataCarts;
        }
      } catch (error) {
        return error;
      } finally {
        this.loading = false
      }
    },
    async getTransactions() {
      const userToken = useToken()
      try {
        this.loading = true
        const res = await $fetch('/api/transactions')
        const data = res.data.filter((item:any) => item.userId === userToken.user.sub && item.status === 'oncheckout')
        if(res.data) {
          this.transactions = data
        }
      } catch (error) {
        return error;        
      } finally {
        this.loading = false
      }
    },
  }
})