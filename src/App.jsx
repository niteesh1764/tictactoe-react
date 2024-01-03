import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  

  return (
    <main>
      <div id = "game-container">
      <ol id="players">
        <li><Player initialName = "Player 1" symbol = "X"/></li>
        <li><Player initialName = "Player 2" symbol = "O"/></li>
      </ol>
        <GameBoard />     
      </div>
      Log
      
    </main>
    
  )
}

export default App;
