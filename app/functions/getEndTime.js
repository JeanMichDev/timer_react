export const getEndTime = (totalMs) => {
  let now = new Date();
  let endTime = new Date(now.getTime() + totalMs);
  return endTime;
};
