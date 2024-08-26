import React, { useState } from "react";

export const TimerInputElement = ({ timeData, value, onChange }) => {
  return (
    <input
      type="number"
      placeholder={timeData}
      className="input w-full max-w-xs border-2 border-gray-300 rounded-lg"
      value={value}
      onChange={onChange}
    />
  );
};
