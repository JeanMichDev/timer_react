import { useEffect, useRef, useState } from "react";
import { updateDisplay } from "./functions/updateDisplay";
import { Btn } from "./AddBtn";
import { Trash2, Play, Pause, RotateCcw } from "lucide-react";
import { ClockRunner } from "./ClockRunner";
import { TotalDuration } from "./TotalDuration";

const getTotalSeconds = (hours, minutes, seconds) => {
  let totalSeconds = 0;
  if (hours) totalSeconds += hours * 3600;
  if (minutes) totalSeconds += minutes * 60;
  if (seconds) totalSeconds += seconds;
  return totalSeconds;
};

export const CreateTimer = ({ hours, minutes, seconds, onDelete, index }) => {
  hours = hours ?? 0;
  minutes = minutes ?? 0;
  seconds = seconds ?? 0;

  const [progress, setProgress] = useState(0);
  const intervalID = useRef(null);
  const [timeLeft, setTimeLeft] = useState([hours, minutes, seconds]);
  const [active, setActive] = useState(true);

  const totalSeconds = getTotalSeconds(hours, minutes, seconds);
  //console.log("totalSeconds", totalSeconds);

  //console.log(timeLeft);
  const totalSecondsLeft = getTotalSeconds(...timeLeft);
  //console.log("totalSecondsLeft", totalSecondsLeft);

  const onePointProgress = 100 / totalSeconds;

  const endTimeRef = useRef(
    new Date(new Date().getTime() + totalSeconds * 1000)
  );
  {
    /*useRef permet de stocker la valeur de la date de fin du timer, il évite qu'on la recalcul à chaque render
    pour l'utiliser il faudra utiliser endTimeRef.current*/
  }

  useEffect(() => {
    if (!active) return;
    //console.log("run efect");
    intervalID.current = setInterval(() => {
      setTimeLeft((currTimeLeft) => updateDisplay(currTimeLeft));
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
      //console.log("clear interval");
      clearInterval(intervalID.current);
    };
  }, [active]);

  //console.log("time left 2", timeLeft);
  let [h, m, s] = timeLeft;

  //console.log("create timer render");

  return (
    <div className="relative mt-2 p-2 border-2">
      <Btn
        onClick={() => {
          onDelete();
        }}
      >
        <Trash2 size={12} />
      </Btn>
      <p>{index}</p>

      <ClockRunner hours={h} minutes={m} seconds={s} progress={progress}>
        <p>Finish at : {endTimeRef.current.toLocaleTimeString()}</p>
        <TotalDuration hours={hours} minutes={minutes} seconds={seconds} />
      </ClockRunner>

      <Btn
        onClick={() => {
          setActive(!active);
          endTimeRef.current = new Date(
            new Date().getTime() + totalSecondsLeft * 1000
          );
        }}
        className="absolute bottom-0 left-0"
      >
        {active ? <Pause size={12} /> : <Play size={12} />}
      </Btn>

      <Btn
        onClick={() => {
          setTimeLeft([hours, minutes, seconds]);
          setProgress(0);
          setActive(true);
          endTimeRef.current = new Date(
            new Date().getTime() + totalSeconds * 1000
          );
        }}
        className="absolute bottom-0 right-0"
      >
        <RotateCcw size={12} />
      </Btn>
    </div>
  );
};
