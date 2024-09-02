export const TimerInputElement = ({
  timeData,
  value,
  onChange,
  unit,
  className,
}) => {
  const handleFocus = (e) => {
    if (e.target.value === "00") {
      e.target.value = "";
    }
  };
  const handleBlur = (e) => {
    if (e.target.value === "") {
      e.target.value = "00";
    }
    if (e.target.value.length === 1) {
      e.target.value = "0" + e.target.value;
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.target.blur();
    }
  };

  return (
    <div className=" text-center text-2xl">
      <p>{unit}</p>
      <input
        type="number"
        placeholder={timeData}
        className={` py-2 pr-0 w-24 bg-gray-700 text-center text-white text-4xl mt-2 border-y-2 border-y-white ${className}`}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};
