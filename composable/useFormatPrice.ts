export default function useFormatPrice(value:any) {
  return 'Rp.' + Number.parseFloat(value).toFixed(2)
}