import { useState } from "react"
import GameBoard from "./Components/GameBorad"
import Player from "./Components/Player"

function App() {
  const [activePlayer,setActivePlayer]=useState("X");

  function handleSelectSquare(){
    setActivePlayer((activePlayer) =>activePlayer === 'X'? 'O' : 'X');
  }

   return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player"> 
          <Player initalName='Player 1' symbol='X' isActive={activePlayer==='X'} />
          <Player initalName='Player 2' symbol='O' isActive={activePlayer==='O'}/>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayer={activePlayer}/>
      </div>
      LOGS
    </main>
  )
}

export default App
