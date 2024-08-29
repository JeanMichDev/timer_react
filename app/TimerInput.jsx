import { Btn } from "./AddBtn";
import { CreateTimer } from "./CreateTimer";
import { CurrentTime } from "./CurrentTime";
import { TimerInputElement } from "./TimerInputElement";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export const TimerInput = ({ className }) => {
  const [hours, setHours] = useState(null);
  const [minutes, setMinutes] = useState(null);
  const [seconds, setSeconds] = useState(null);
  const [timers, setTimers] = useState([]);

  const handleClick = () => {
    let newSec = seconds;
    let newMin = minutes;
    let newHour = hours;

    if (newSec > 60) {
      const secTomin = Math.floor(newSec / 60);
      const remainingSec = newSec % 60;
      newMin = newMin + secTomin;
      newSec = remainingSec;
    }
    if (newMin > 60) {
      const minToHour = Math.floor(newMin / 60);
      const remainingMin = newMin % 60;
      newHour = newHour + minToHour;
      newMin = remainingMin;
    }

    setTimers([
      ...timers,
      {
        hours: newHour,
        minutes: newMin,
        seconds: newSec,
        id: Date.now().toString(),
      },
    ]);
    setHours(null);
    setMinutes(null);
    setSeconds(null);
  };

  const handleDelete = (id) => {
    console.log("handleDelete", id);
    setTimers(timers.filter((timer) => timer.id !== id));
  };
  console.log(timers);
  console.log("Timer input render");

  return (
    <>
      <main
        className={`mx-auto ${className} overflow-visible  border-red-500 border-2 `}
      >
        <h1 className="text-4xl text-center">Timer</h1>
        <CurrentTime />

        <div className="flex flex-row items-center justify-center">
          <TimerInputElement
            unit="hours"
            timeData="00 :"
            value={hours ? hours : "00 :"}
            onChange={(e, curr) => (curr = setHours(Number(e.target.value)))}
            className="border-l-2 border-l-white "
          ></TimerInputElement>
          <TimerInputElement
            unit="min"
            timeData="00 :"
            value={minutes ? minutes : "00 :"}
            onChange={(e, curr) => (curr = setMinutes(Number(e.target.value)))}
          ></TimerInputElement>
          <TimerInputElement
            unit="sec"
            timeData="00"
            value={seconds ? seconds : "00"}
            onChange={(e, curr) => (curr = setSeconds(Number(e.target.value)))}
            className="border-r-2 border-r-white "
          ></TimerInputElement>
        </div>
        <div className="text-center">
          <Btn
            className="mt-4  bg-green-800 hover:bg-green-600"
            onClick={handleClick}
          >
            Add Timer
          </Btn>
        </div>
        <div className="flex flex-wrap border-2 border-green-400 mt-5 absolute left-5 right-5 justify-center">
          {timers.map((timer) => (
            <CreateTimer
              key={timer.id}
              hours={timer.hours}
              minutes={timer.minutes}
              seconds={timer.seconds}
              onDelete={() => handleDelete(timer.id)}
              id={timer.id}
            ></CreateTimer>
          ))}
        </div>
      </main>
    </>
  );
};
