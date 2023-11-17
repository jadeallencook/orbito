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

const checkIfWinner = (board) => {
  const winningCombinations = [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [0, 4, 8, 12],
    [1, 5, 9, 13],
    [2, 6, 10, 14],
    [3, 7, 11, 15],
    [8, 9, 10, 11],
    [12, 13, 14, 15],
  ];
  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c, d] = winningCombinations[i];
    if (
      board[a] !== null &&
      board[a] === board[b] &&
      board[a] === board[c] &&
      board[a] === board[d]
    ) {
      return board[a];
    }
  }
  return null;
};

const Orbito = () => {
  const [board, setBoard] = useState(Array(16).fill(null));
  const [isPlayerOne, setIsPlayerOne] = useState(true);
  const [winner, setWinner] = useState(null);
  const currentPlayer =
    winner !== null ? (winner ? true : false) : isPlayerOne ? true : false;

  const handleWinner = (winner) => {
    setWinner(winner);
  };

  const handleClick = (index) => {
    if (winner !== null) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = isPlayerOne;
    const rotatedBoard = rotateBoard(newBoard);
    const isWinner = checkIfWinner(newBoard) || checkIfWinner(rotatedBoard);

    if (checkIfWinner(rotatedBoard) !== null) {
      setBoard(rotatedBoard);
    } else if (checkIfWinner(newBoard) !== null) {
      setBoard(newBoard);
    }

    if (isWinner !== null) {
      handleWinner(isWinner);
      return;
    }

    setBoard(rotatedBoard);

    setIsPlayerOne(!isPlayerOne);
    return;
  };

  return (
    <div className="orbito">
      <h1 className="orbito__title">Orbito</h1>
      <div className="orbito__board">
        {board.map((cell, index) => (
          <div
            className="orbito__board__cell"
            id={`orbito__cell-${index}`}
            onClick={winner !== null ? null : () => handleClick(index)}
            key={`orbito__cell-${index}`}
          >
            <div>
              <Teardrop value={cell} />
            </div>
          </div>
        ))}
      </div>
      <p className="orbito__message">
        <>
          <span className={`player ${currentPlayer ? "red" : "green"}`}>
            {currentPlayer ? "Player 1" : "Player 2"}
          </span>

          <span>
            {winner !== null ? "WINNER" : "Move opponent and make your move..."}
          </span>
        </>
      </p>
      <div className="orbito__buttons">
        <button
          className="red"
          onClick={() => {
            setBoard(Array(16).fill(null));
            setIsPlayerOne(true);
            setWinner(null);
          }}
        >
          Reset Game
        </button>
        <button className="green">End Turn</button>
      </div>
      <p className="orbito__links">
        Win by aligning four marbles of your color in a row—horizontal,
        vertical, or diagonal—on the dynamic game board. Each turn ends with a
        press of the "end turn" button, shifting all marbles one space in their
        orbit. This constant movement requires strategic thinking. Additionally,
        you can move an opponent's marble once per turn, but remember, they can
        do the same.
        <br />
        <br />
        <a
          href="https://www.tiktok.com/@games4two/video/7292228477258861866"
          target="_blank"
        >
          View TikTok Video
        </a>
        <br />
        <a
          href="https://boardgamegeek.com/boardgame/383733/orbito#buyacopy"
          target="_blank"
        >
          Buy A Copy
        </a>
      </p>
    </div>
  );
};
export default Orbito;
