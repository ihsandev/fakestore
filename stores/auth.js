import useToken from "@/composable/useToken"

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null,
    user: null,
    loading: false,
    error: null
  }),
  actions: {
    async login(body) {
      const { baseURL } = useRuntimeConfig().public 
      try {
        this.loading = true
        const res = await $fetch('/auth/login', {baseURL, method: 'POST', body})
        const cookie = useCookie('token')
        cookie.value = res.token
        await navigateTo('/akun')
      } catch (err) {
        this.error = 'Username atau password Salah!';
        setTimeout(() => {
          this.error = null
        }, 3000)
      } finally {
        this.loading = false
      }
    },
    async getUser() {
      const { baseURL } = useRuntimeConfig().public 
      try {
        this.loading = true
        const token = useToken()
        const res = await $fetch(`/users/${token.user.sub}`, {baseURL})
        this.user = res
      } catch (err) {
        return err;
      } finally {
        this.loading = false
      }
    },
    async logout() {
      const cookie = useCookie('token')
      if(cookie) {
        cookie.value = null
        this.user = null
        await navigateTo('/auth/login')
      }
    },
  }
})