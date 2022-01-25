export const indexCarousel = (current, inc, max) => {
  let newIndex = current + inc
  if (newIndex === -1){
    newIndex = max
  } else if (newIndex === max + 1){
    newIndex = 0
  }
  return newIndex
}