import useAuth from "~~/composable/useAuth"

export default defineNuxtRouteMiddleware((to, from) => {
  const auth = useAuth()

  if (!auth.isLogin) {
    return navigateTo('/auth/login')
  } else {
    return navigateTo('/')
  }
})