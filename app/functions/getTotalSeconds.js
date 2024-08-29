export const getTotalSeconds = (hours, minutes, seconds) => {
  let totalSeconds = 0;
  if (hours) totalSeconds += hours * 3600;
  if (minutes) totalSeconds += minutes * 60;
  if (seconds) totalSeconds += seconds;
  return totalSeconds;
};