import { useEffect, useState, useRef } from "react";

export const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      setCurrentTime(new Date());
    });
    return () => clearInterval(intervalId.current);
  }, [currentTime]);
  return (
    <div className="text-2xl text-center">
      <h2>Current Time</h2>
      {/* suppressHydrationWarning is used to suppress the hydration warning that appears because timestamp aren't equal in server and client */}
      <time suppressHydrationWarning>{currentTime.toLocaleTimeString()}</time>
    </div>
  );
};
