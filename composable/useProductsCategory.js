export default async function useProductsCategory(category) {
  const { baseURL } = useRuntimeConfig().public
  const uri = `/products/category/${category}`
  const response = await $fetch(uri, {baseURL})

  return response;
}