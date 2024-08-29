import { getTimeText } from "./functions/getTimeText";
import { handleFireworks } from "./functions/handleFireworks";

export const ClockRunner = ({
  hours,
  minutes,
  seconds,
  progress,
  children,
  isActive,
}) => {
  if (hours === 0 && minutes === 0 && seconds === 0 && isActive === true)
    handleFireworks();

  return (
    //utilisation de https://daisyui.com/components/radial-progress/ pour générer le cercle de progression
    <div
      className="radial-progress bg-slate-800 h-100 w-100 justify-center items-center flex flex-col"
      style={{ "--value": progress, "--size": "12rem", "--thickness": "2px" }}
      role="progressbar"
    >
      {getTimeText([hours, minutes, seconds])}
      {children}
    </div>
  );
};
