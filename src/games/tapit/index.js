import React, { useState, useEffect } from "react";
import "./style.css";

const Circle = ({ fill }) => {
  return (
    <svg viewBox="0 0 32 32">
      <circle cx="16" cy="16" r="16" fill={fill} />
    </svg>
  );
};

const TapIt = () => {
  const [difficulty, setDifficulty] = useState(16);
  const [active, setActive] = useState(0);
  const [speed, setSpeed] = useState(100);
  const [isGoingRight, setIsGoingRight] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(isGoingRight ? active + 1 : active - 1);
      if (active === 0 || active === difficulty) {
        setIsGoingRight((value) => !value);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [difficulty, speed, isGoingRight]);

  const handleClick = (index) => {
    
  };

  return (
    <section className="tapit">
      <h1 className="tapit__title">Tap It</h1>
      <section className="tapit__board" data-active={active}>
        {Array(difficulty)
          .fill(null)
          .map((circle, index) => (
            <Circle
              key={`circle-${index}`}
              fill={active === index ? "#f00" : "#fff"}
            />
          ))}
      </section>
    </section>
  );
};
export default TapIt;
