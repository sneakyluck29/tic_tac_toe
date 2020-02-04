import React from 'react';
import logo from '../logo.svg';
import '../Sources/app.scss';
import Board from "./Board"

function App() {
  return (
    <div className="tic-tac-toe">
        <div className="game-board">
            <Board/>
        </div>

    </div>
  );
}

export default App;
