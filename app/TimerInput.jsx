import { AddBtn } from "./AddBtn";
import { CreateTimer } from "./CreateTimer";
import { CurrentTime } from "./CurrentTime";
import { TimerInputElement } from "./TimerInputElement";
import React, { useEffect, useState } from "react";

export const TimerInput = () => {
  const [hours, setHours] = useState(null);
  const [minutes, setMinutes] = useState(null);
  const [seconds, setSeconds] = useState(null);
  const [timers, setTimers] = useState([]);

  const handleClick = () => {
    let newSec = seconds;
    let newMin = minutes;
    let newHour = hours;

    if (newSec > 60) {
      console.log("s > 60");
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
      },
    ]);
  };

  const handleDelete = (index) => {
    setTimers((prev) => (prev = timers.filter((_, i) => i !== index)));
  };

  return (
    <main>
      <h1 className="text-4xl text-center">Timer</h1>
      <CurrentTime> </CurrentTime>
      <div className="flex flex-row items-center justify-center">
        <TimerInputElement
          timeData="Hours"
          value={hours}
          onChange={(e, curr) => (curr = setHours(Number(e.target.value)))}
        ></TimerInputElement>
        <TimerInputElement
          timeData="Minutes"
          value={minutes}
          onChange={(e, curr) => (curr = setMinutes(Number(e.target.value)))}
        ></TimerInputElement>
        <TimerInputElement
          timeData="Seconds"
          value={seconds}
          onChange={(e, curr) => (curr = setSeconds(Number(e.target.value)))}
        ></TimerInputElement>
      </div>
      <div>
        <AddBtn onClick={handleClick}>Add Timer</AddBtn>
      </div>
      <div>
        {timers.map((timer, index) => (
          <CreateTimer
            key={index}
            hours={timer.hours}
            minutes={timer.minutes}
            seconds={timer.seconds}
            onDelete={() => handleDelete(index)}
          ></CreateTimer>
        ))}
      </div>
    </main>
  );
};
