export default async function useProducts(params:any) {
  const { baseURL } = useRuntimeConfig().public 
  const uri = `${baseURL}/products`
  const products = await $fetch(uri, {params})

  return products
}