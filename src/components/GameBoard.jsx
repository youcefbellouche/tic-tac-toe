import { act, useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({onSelectCell, activePlayer}) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);
  function handleSelectectCell(rowIndex, symbolIndex) {
    setGameBoard((prevGameBoard) => {
        const updatedBoard = [...prevGameBoard.map((row) => [...row])];
        updatedBoard[rowIndex][symbolIndex] = activePlayer;
        return updatedBoard;
    });
    onSelectCell();
}
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {" "}
            {row.map((symbol, symbolIndex) => (
              <li key={symbolIndex}>
                <button onClick={()=>handleSelectectCell(rowIndex,symbolIndex)}>{symbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
