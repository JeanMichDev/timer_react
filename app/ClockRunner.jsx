export const ClockRunner = ({ isActive, hours, minutes, seconds }) => {
  const [progress, setProgress] = useState(0);
  const intervalID = useRef(null);
  const [timeLeft, setTimeLeft] = useState([hours, minutes, seconds]);

  useEffect(() => {
    if (!isActive) return;
    intervalID.current = setInterval(() => {
      setTimeLeft(updateDisplay(timeLeft));
      setProgress((curr) => {
        const newProgress = curr + onePointProgress;
        if (newProgress >= 100) {
          clearInterval(intervalID.current);
          return 100;
        }
        return newProgress;
      });
    }, 1000);
    return () => {
      console.log("clean");
      clearInterval(intervalID.current);
    };
  }, [isActive]);

  return (
    <div
      className="radial-progress "
      style={{ "--value": progress }}
      role="progressbar"
    >
      {Math.floor(h)} : {Math.floor(m)} : {Math.floor(s)}
    </div>
  );
};
