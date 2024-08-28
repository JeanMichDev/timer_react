export const getTimeText = (timeLeft) => {
  const [hours, minutes, seconds] = timeLeft;
  const h = hours < 10 ? `0${hours}` : hours;
  const m = minutes < 10 ? `0${minutes}` : minutes;
  const s = seconds < 10 ? `0${seconds}` : seconds;

  return `${h}:${m}:${s}`;
};

// {Math.floor(hours)} : {Math.floor(minutes)} : {Math.floor(seconds)}
