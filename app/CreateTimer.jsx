import { useEffect, useRef, useState } from "react";
import { updateDisplay } from "./functions/updateDisplay";
import { AddBtn } from "./AddBtn";
import { Trash2 } from "lucide-react";

const getTotalSeconds = (hours, minutes, seconds) => {
  let totalSeconds = 0;
  if (hours) totalSeconds += hours * 3600;
  if (minutes) totalSeconds += minutes * 60;
  if (seconds) totalSeconds += seconds;
  return totalSeconds;
};

export const CreateTimer = ({ hours, minutes, seconds, onDelete }) => {
  hours = hours ?? 0;
  minutes = minutes ?? 0;
  seconds = seconds ?? 0;

  const [progress, setProgress] = useState(0);
  const intervalID = useRef(null);
  const [timeLeft, setTimeLeft] = useState([hours, minutes, seconds]);
  const [active, setActive] = useState(true);

  const totalSeconds = getTotalSeconds(hours, minutes, seconds);
  const onePointProgress = 100 / totalSeconds;

  const endTime = new Date(new Date().getTime() + totalSeconds * 1000);

  useEffect(() => {
    console.log(timeLeft);
    if (!active) return;
    intervalID.current = setInterval(() => {
      setTimeLeft(updateDisplay(timeLeft));
      setProgress((curr) => {
        const newProgress = curr + onePointProgress;
        if (newProgress >= 100) {
          clearInterval(intervalID.current);
          setActive(false);
          return 100;
        }
        return newProgress;
      });
    }, 1000);
    return () => {
      console.log("clean");
      clearInterval(intervalID.current);
    };
  }, [active, onePointProgress, timeLeft, progress]);

  const [h, m, s] = timeLeft;

  return (
    <div className="p-5 border-5 bg-red-400 w-1/4">
      <AddBtn onClick={onDelete}>
        <Trash2 size={24} />
      </AddBtn>
      <p>Finish at : {endTime.toLocaleTimeString()}</p>
      <div
        className="radial-progress "
        style={{ "--value": progress }}
        role="progressbar"
      >
        {Math.floor(h)} : {Math.floor(m)} : {Math.floor(s)}
      </div>
      <AddBtn onClick={() => clearInterval(intervalID.current)}>Stop</AddBtn>
      <AddBtn onClick={() => setActive(!active)}>
        {active ? "Pause" : "Run"}
      </AddBtn>
      <AddBtn
        onClick={() => {
          setTimeLeft((prev) => (prev = [hours, minutes, seconds]));
          setProgress(0);
          setActive(true);
        }}
      >
        Reset
      </AddBtn>
      <div className="bg-red-700">
        <p> {hours > 0 ? `${hours} hours and ${minutes} minutes` : null}</p>
        <p>
          {" "}
          {hours === 0 && minutes > 0
            ? `${minutes} minutes and ${seconds} secondes`
            : null}
        </p>
        <p> {hours === 0 && minutes === 0 ? `${seconds} seconds ` : null}</p>
      </div>
    </div>
  );
};
