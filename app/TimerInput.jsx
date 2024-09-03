import { Btn } from "./AddBtn";
import { CurrentTime } from "./CurrentTime";
import { TimerInputElement } from "./TimerInputElement";
import React, { useEffect, useState } from "react";
import { CreateTimer } from "./CreateTimer";

import { SeparationTimer } from "./SeparationTimer";

export const TimerInput = ({ className }) => {
  const [hours, setHours] = useState(null);
  const [minutes, setMinutes] = useState(null);
  const [seconds, setSeconds] = useState(null);
  const [timers, setTimers] = useState([]);

  const handleClick = () => {
    if (!hours && !minutes && !seconds) {
      alert("Please enter at least 1 sec");
      return;
    }

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
    const newTimers = timers.filter((timer) => timer.id !== id);
    setTimers(newTimers);
  };

  return (
    <>
      <main className={`mx-auto min-h-full  ${className}  `}>
        <h1 className="text-4xl text-center mt-5">What year are we?</h1>
        <CurrentTime />
        <div className="flex flex-row items-center justify-center">
          <TimerInputElement
            unit="hours"
            timeData="00"
            value={hours ? hours : "00"}
            onChange={(e) => setHours(Number(e.target.value))}
            className="border-l-2 border-l-white text-white"
          ></TimerInputElement>
          <SeparationTimer>:</SeparationTimer>
          <TimerInputElement
            unit="min"
            timeData="00"
            value={minutes ? minutes : "00"}
            onChange={(e) => setMinutes(Number(e.target.value))}
          ></TimerInputElement>
          <SeparationTimer>:</SeparationTimer>
          <TimerInputElement
            unit="sec"
            timeData="00"
            value={seconds ? seconds : "00"}
            onChange={(e) => setSeconds(Number(e.target.value))}
            className="border-r-2 border-r-white "
          ></TimerInputElement>
        </div>
        <div className="text-center">
          <Btn className="mt-4 text-gray-700" onClick={handleClick}>
            Add Timer
          </Btn>
        </div>

        <div className=" flex flex-wrap justify-center item-center gap-2  w-screen absolute left-0 ">
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
