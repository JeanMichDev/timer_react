export const TimerInputElement = ({
  timeData,
  value,
  onChange,
  unit,
  className,
}) => {
  return (
    <div className=" text-center text-2xl">
      <p>{unit}</p>
      <input
        type="number"
        placeholder={timeData}
        className={` py-2 pr-0 w-24 bg-gray-700 text-center text-white text-4xl mt-2 border-y-2 border-y-white ${className}`}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
