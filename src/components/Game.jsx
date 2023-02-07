import React from 'react';
import Board from './Board';

const Game = () => {
  const status = 'Next player is X';
  const moves = (
    <li>
      <button className="start-btn">Start Game</button>
    </li>
  );
  const squares = Array(9).fill(null);
  return (
    <div className="game">
      <div className="game-board">
        <Board squares={squares}></Board>
      </div>
      <div className="game-info">
        <div className="title-name">{status}</div>
        <ul>{moves}</ul>
      </div>
    </div>
  );
};

export default Game;
