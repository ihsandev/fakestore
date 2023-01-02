import jwt_decode from "jwt-decode"

export default function useToken() {
  const user:any = ref(null)
  const cookieToken:any = useCookie('token')
  if(cookieToken) {
    const parseToken = jwt_decode(cookieToken.value)
    user.value = parseToken
  }
  return {
    user: user.value
  }
}