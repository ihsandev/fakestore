export default async function useCategories() {
  const { baseURL } = useRuntimeConfig().public 
  const uri = `${baseURL}/products/categories`
  const categories:any = await $fetch(uri)

  const capitalized = (name:any) => {
    const capitalizedFirst = name[0].toUpperCase();
    const rest = name.slice(1);

    return capitalizedFirst + rest;
  }

  const mapCategories = categories.map((category:any) => {
    let icon = 'category';
    if(category === "electronics") {
      icon = 'devices'
    } else if(category === "jewelery") {
      icon = 'light_mode'
    } else if(category === "men's clothing") {
      icon = 'face'
    } else if(category === "women's clothing") {
      icon = 'face_3'
    }

    return {
      icon,
      label: capitalized(category),
      name: category
    }
  })

  return mapCategories
}