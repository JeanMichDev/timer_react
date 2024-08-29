import { useEffect, useRef, useState } from "react";
import { updateDisplay } from "./functions/updateDisplay";
import { Btn } from "./AddBtn";
import { Trash2, Play, Pause, RotateCcw } from "lucide-react";
import { ClockRunner } from "./ClockRunner";
import { TotalDuration } from "./TotalDuration";
import { motion, AnimatePresence } from "framer-motion";
import { handleFireworks } from "./functions/handleFireworks";
import { getTotalSeconds } from "./functions/getTotalSeconds";

export const CreateTimer = ({
  hours,
  minutes,
  seconds,
  onDelete,
  className,
}) => {
  hours = hours ?? 0;
  minutes = minutes ?? 0;
  seconds = seconds ?? 0;

  const [progress, setProgress] = useState(0);
  const intervalID = useRef(null);
  const [timeLeft, setTimeLeft] = useState([hours, minutes, seconds]);
  const [active, setActive] = useState(true);
  const [visible, setVisible] = useState(true);

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
          setTimeout(() => setActive(false), 500); //pour pouvoir lancer le feu d'artifice
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
  const [h, m, s] = timeLeft;

  //console.log("create timer render");

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="box"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{
            duration: 0.2,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className={`relative mt-2 p-2 border-2 ${className}`}>
            <Btn
              onClick={() => {
                setVisible(false);
                console.log(visible);
                setTimeout(() => {
                  onDelete();
                  console.log(visible);
                }, 800);
              }}
            >
              <Trash2 size={12} />
            </Btn>

            <ClockRunner
              hours={h}
              minutes={m}
              seconds={s}
              progress={progress}
              isActive={active}
            >
              <p>Finish at : {endTimeRef.current.toLocaleTimeString()}</p>
              <TotalDuration
                hours={hours}
                minutes={minutes}
                seconds={seconds}
              />
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
        </motion.div>
      )}
    </AnimatePresence>
  );
};
