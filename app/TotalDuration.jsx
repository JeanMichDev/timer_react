export const TotalDuration = ({ hours, minutes, seconds }) => {
  return (
    <div className="italic">
      <p> {hours > 0 ? `${hours} hours  ${minutes} mins ` : null}</p>
      <p>
        {" "}
        {hours === 0 && minutes > 0 ? `${minutes} mins  ${seconds} sec` : null}
      </p>
      <p> {hours === 0 && minutes === 0 ? `${seconds} sec ` : null}</p>
    </div>
  );
};
