type asd = {
  a: string
}
export default defineEventHandler<asd>((event) => {
  return {
    a: 'asd'
  }
})