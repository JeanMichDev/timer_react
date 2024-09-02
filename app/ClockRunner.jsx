import { getTimeText } from "./functions/getTimeText";
import { handleFireworks } from "./functions/handleFireworks";
import { playSound } from "./functions/playSound";
import { useEffect } from "react";

export const ClockRunner = ({
  hours,
  minutes,
  seconds,
  progress,
  children,
  isActive,
}) => {
  useEffect(() => {
    if (hours === 0 && minutes === 0 && seconds === 0 && isActive) {
      handleFireworks();
      playSound("/sounds/ring.mp3");
      console.log(Notification.permission);

      if (Notification.permission === "granted") {
        const notification = new Notification("Finish!", {
          body: "Time's up!",
        });
        console.log("Notification sent:", notification);
      } else {
        console.log("Notification permission not granted.");
      }
    }
  }, [hours, minutes, seconds, isActive]);

  return (
    //utilisation de https://daisyui.com/components/radial-progress/ pour générer le cercle de progression
    <div
      className="radial-progress bg-gray-700 h-100 w-100 justify-center items-center flex flex-col"
      style={{ "--value": progress, "--size": "12rem", "--thickness": "2px" }}
      role="progressbar"
    >
      {getTimeText([hours, minutes, seconds])}
      {children}
    </div>
  );
};
