export default function useAuth() {
  const token = useCookie('token')
  const isLogin = token.value ? true : false
  const user = token.value

  return {
    isLogin,
    user
  }
}