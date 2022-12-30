export default function useAuth() {
  const token = useCookie('token')
  const isLogin = token.value ? true : false

  return {
    isLogin
  }
}