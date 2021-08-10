//clean regex
export const cleanText = (str: String): any => {
  return str?.replace(/<\/?[^>]+(>|$)/g, '')
}
