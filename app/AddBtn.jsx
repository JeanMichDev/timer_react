import { handleFireworks } from "./functions/handleFireworks";

export const Btn = ({ onClick, children, className, fireworks = false }) => {
  return (
    <button
      className={`" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded ${className} "`}
      onClick={() => {
        onClick();
        fireworks && handleFireworks();
      }}
    >
      {children}
    </button>
  );
};
