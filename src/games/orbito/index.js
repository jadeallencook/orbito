import React, { useState } from "react";
import "./style.css";

const Teardrop = () => (
  <svg viewBox="0 0 30 42">
    <path
      fill="transparent"
      stroke="var(--white)"
      strokeWidth="1.5"
      d="M15 3
           Q16.5 6.8 25 18
           A12.8 12.8 0 1 1 5 18
           Q13.5 6.8 15 3z"
    />
  </svg>
);

const Orbito = () => {
  const [board, setBoard] = useState(Array(16).fill(null));
  return (
    <div className="orbito">
      <div className="orbito__board">
        {board.map((cell, index) => (
          <div className="orbito__board__cell" id={`orbito__cell-${index}`}>
            <div>
              <Teardrop />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Orbito;
