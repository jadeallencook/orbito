import React, { useState } from "react";
import "./style.css";

const Teardrop = ({ value }) => {
  const fillColor =
    value === null ? "transparent" : value ? "var(--red)" : "var(--green)";
  return (
    <svg viewBox="0 0 30 42">
      <path
        stroke="var(--white)"
        strokeWidth="1.5"
        fill={fillColor}
        d="M15 3
           Q16.5 6.8 25 18
           A12.8 12.8 0 1 1 5 18
           Q13.5 6.8 15 3z"
      />
    </svg>
  );
};

const Orbito = () => {
  const [board, setBoard] = useState(Array(16).fill(null));
  const [isPlayerOne, setIsPlayerOne] = useState(true);

  const rotateBoard = (board) => {
    const newBoard = Array(16).fill(null);
    newBoard[0] = board[1];
    newBoard[1] = board[2];
    newBoard[2] = board[3];
    newBoard[3] = board[7];
    newBoard[4] = board[0];
    newBoard[5] = board[6];
    newBoard[6] = board[10];
    newBoard[7] = board[11];
    newBoard[8] = board[4];
    newBoard[9] = board[5];
    newBoard[10] = board[9];
    newBoard[11] = board[15];
    newBoard[12] = board[8];
    newBoard[13] = board[12];
    newBoard[14] = board[13];
    newBoard[15] = board[14];
    return newBoard;
  };

  const handleClick = (index) => {
    let newBoard = [...board];
    newBoard[index] = isPlayerOne;
    newBoard = rotateBoard(newBoard);
    setBoard(newBoard);
    setIsPlayerOne(!isPlayerOne);
  };

  return (
    <div className="orbito">
      <h1 className="orbito__title">Orbito</h1>
      <div className="orbito__board">
        {board.map((cell, index) => (
          <div
            className="orbito__board__cell"
            id={`orbito__cell-${index}`}
            onClick={() => handleClick(index)}
            key={`orbito__cell-${index}`}
          >
            <div>
              <Teardrop value={cell} />
            </div>
          </div>
        ))}
      </div>
      <p className="orbito__message">
        <span className="orbito__message__player">
          {isPlayerOne ? "Player 1 (Red)" : "Player 2 (Green)"}
        </span>
      </p>
    </div>
  );
};
export default Orbito;
