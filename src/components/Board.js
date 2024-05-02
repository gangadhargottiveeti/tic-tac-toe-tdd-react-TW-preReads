import { useState } from "react";
import Square from "./Square";
import calculateWinner from "../utils/GameWinner";
import isDraw from "../utils/isDraw";

export default function Board() {
    
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    let status;

    const handleClick = (index) => {

        if(squares[index] || calculateWinner(squares)){
            return;
        }
        const nextSquares = [...squares]
        if(xIsNext){
            nextSquares[index] = 'X'
        }else{
            nextSquares[index] = 'O'
        }
        setSquares(nextSquares);
        setXIsNext(!xIsNext);

    }

    const winner = calculateWinner(squares);
    const isGameDraw = isDraw(squares);

    if(winner){
        status = "Winner : "+winner;
    }else if(isGameDraw){
        status = "Draw";
    }else{
        status = "Next Player : "+(xIsNext ? 'X' : 'O');
      }

  // Storing squares in an array
  const boardSquares = [];

  for(let i = 0; i < 3; i++){
    // Storing each Row squares in this array
    const squaresInRow = [];

    for(let j = 0; j < 3; j++){
      const index = i * 3 + j;
      squaresInRow.push(
        <Square 
          key={index}
          value={squares[index]}
          testId={index}
          onSquareClick={() => handleClick(index)}
        />
      )
    }

    boardSquares.push(
      <div key={i} className='board-row'>
        {squaresInRow}
      </div>
    )
  }
    
  return (
    <div>
        <div className="status" data-testid = "status">
            {status}
        </div>

        <div className="game-board" data-testid="game-board">
            {boardSquares}
        </div>
    </div>
  )
}
