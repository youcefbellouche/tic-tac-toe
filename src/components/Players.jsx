import Player from "./Player";

export default function Players({activePlayer}) {
  return (
    <ol id="players" className="highlight-player">
      <Player initialName="player 1" symbol="X" className={activePlayer==="X"?"active":""}/>
      <Player initialName="player 2" symbol="O" className={activePlayer==="O"?"active":""}/>
    </ol>
  )
}