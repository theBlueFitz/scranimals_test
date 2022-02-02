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
export const getSevenDates = () => {
  const newSevenDays = [];
  for (let i = 6; i > 0; i--) {
    const date2 = new Date(Date.now() - i * 24 * 60 * 60 * 1000).getDate();
    const month2 =
      new Date(Date.now() - i * 24 * 60 * 60 * 1000).getMonth() + 1;
    const year2 = new Date(Date.now() - i * 24 * 60 * 60 * 1000).getFullYear();
    newSevenDays.push(date2 + "-" + month2 + "-" + year2);
  }
  newSevenDays.push(getCurrentDate());
  return newSevenDays.reverse();
};

export const dateConverter = (str) => {
  const date = str.split("-");
  const months = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  };
  return `${months[date[1]]} ${date[0]}, ${date[2]}`;
};
