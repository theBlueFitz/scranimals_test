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

export const getCurrentDate = () => {
  const date = new Date().getDate();
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();
  return date + "-" + month + "-" + year; //format: dd-mm-yyyy;
};
