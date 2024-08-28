export const updateDisplay = (timerArray) => {
  let [h, m, s] = timerArray;

  if (s === 0) {
    if (m > 0) {
      m -= 1;
      s = 59;
      return [h, m, s];
    }
    if (m === 0) {
      if (h > 0) {
        h -= 1;
        m = 59;
        s = 59;
        return [h, m, s];
      } else {
        return [0, 0, 0];
      }
    }
  } else {
    s -= 1;
  }
  return [h, m, s];
};
