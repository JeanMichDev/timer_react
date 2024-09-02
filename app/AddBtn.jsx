import { handleFireworks } from "./functions/handleFireworks";

export const Btn = ({ onClick, children, className, fireworks = false }) => {
  return (
    <button
      className={` bg-red-300 hover:bg-red-400 text-black font-bold py-2 px-2 rounded ${className} `}
      onClick={() => {
        onClick();
        fireworks && handleFireworks();
      }}
    >
      {children}
    </button>
  );
};
