export const Btn = ({ onClick, children, className }) => {
  return (
    <button
      className={`" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded ${className} "`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
