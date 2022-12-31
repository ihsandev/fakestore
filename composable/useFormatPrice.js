export default function useFormatPrice(value) {
  return 'Rp.' + Number.parseFloat(value).toFixed(2)
}