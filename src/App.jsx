import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { useState } from "react";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./components/GameOver";

const PLAYERS = {
  X : 'Player 1',
  O : 'Player 2'
}

const INITIAL_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns){
  let currentPlayer = 'X';

  if(gameTurns.length > 0 && gameTurns[0].player === 'X'){
        currentPlayer = 'O';
      }
    return currentPlayer;
}
export default function App() {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);
  let winner;
  let gameBoard = [...INITIAL_BOARD.map((array) => [...array])];
  let activePlayer = deriveActivePlayer(gameTurns);

  function handleNameChange(symbol, newName){
    setPlayers(prevPlayers => {
      return {
        ...prevPlayers,
        [symbol] : newName
      };
    });
  }
  const hasDrawn = gameTurns.length === 9 && !winner;
  
  for (const turn of gameTurns){
    const {square ,player} = turn;
    const {row ,col} = square;
    
    gameBoard[row][col] = player;
  }
  
  for (const combinations of WINNING_COMBINATIONS){
    const firstSymbol = gameBoard[combinations[0].row][combinations[0].column];
    const secondSymbol = gameBoard[combinations[1].row][combinations[1].column];
    const thirdSymbol = gameBoard[combinations[2].row][combinations[2].column];

    if (firstSymbol && 
      firstSymbol === secondSymbol && 
      firstSymbol === thirdSymbol){
      winner = players[firstSymbol];
    }
  }

  function handleSelectSquare(rowIndex, colIndex){
    setGameTurns((prevTurns) => {
      let currentPlayer = deriveActivePlayer(prevTurns);
      const updatedTurns = [{ square : {row : rowIndex , col : colIndex} , player : currentPlayer}, ...prevTurns];
      return updatedTurns;
    });
  }

  function handleRematch(){
    setGameTurns([]);
  }

  return (
    <main>
      <div id = "game-container">
        <ol id="players" className="highlight-player">
          <Player initialName = {PLAYERS.X} symbol = "X"
          isActive = {activePlayer === 'X'}
          onNameChange = {handleNameChange}
          />
          <Player initialName = {PLAYERS.O} symbol = "O"
          isActive = {activePlayer === 'O'}
          onNameChange = {handleNameChange}
          />
        </ol>
          {(winner || hasDrawn) && (<GameOver winner={winner} onRestart={handleRematch}/>)}
          <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}/>     
      </div>
      <Log turns={gameTurns}/>    
    </main>
  );
}

