export default function useProductExsist(products = [], productId) {
  let productIndex;
  const isProductExist = products.filter((item, index) => {
    if(String(item.product.id) === String(productId)) {
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