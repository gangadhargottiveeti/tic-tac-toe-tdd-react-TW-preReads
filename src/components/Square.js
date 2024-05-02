
export default function Square({value, testId,onSquareClick}) {
  return (
    <div>
        <button className="square" data-testid={`square${testId}`} onClick={onSquareClick}>
            {value}
        </button>
    </div>
  )
}
