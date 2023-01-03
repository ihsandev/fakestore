export default function useProductExsist(products = [], productId:any) {
  let productIndex;
  const isProductExist = products.filter((item:any, index) => {
    if(String(item.id) === String(productId)) {
      productIndex = index;
      return true
    } else {
      return false
    }
  })
  
  return {
    index : productIndex,
    isProductExist: isProductExist.length
  }
}