import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Players from "./components/Players";

function App() {
  const [activePlayer,setActivePlayer]= useState('X');
  function handleSelectedCell(){
    setActivePlayer((curActivePlayer)=>curActivePlayer==='X'?'O':'X')
  }
  return (
    <main>
      <div id="game-container">
        <Players activePlayer={activePlayer}/>
        <GameBoard onSelectCell={handleSelectedCell} activePlayer={activePlayer}/>
      </div>
    </main>
  );
}

export default App;
