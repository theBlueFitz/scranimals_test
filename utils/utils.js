export const indexCarousel = (current, inc, max) => {
  let newIndex = current + inc;
  if (newIndex === -1) {
    newIndex = max;
  } else if (newIndex === max + 1) {
    newIndex = 0;
  }
  return newIndex;
};

export const waterTracker = (current, inc, max) => {
  let newIndex = current + inc;
  if (newIndex >= max) {
    return max;
  }
  return newIndex;
};
