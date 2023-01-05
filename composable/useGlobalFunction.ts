export const uniqueId = () => {
  const dateString = Date.now().toString(36);
  const randomness = Math.random().toString(36).substring(2);
  return dateString + randomness;
};

export const useTotalPrice = (products:any) => {
  return 'Rp. ' + products.reduce((a:any,b:any) => a + (b.price * b.qty), 0)
}