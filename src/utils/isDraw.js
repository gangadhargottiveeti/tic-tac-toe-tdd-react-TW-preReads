import calculateWinner from "./GameWinner";

export default function isDraw(squares) {
    const winner = calculateWinner(squares);
    const hasNoNull = squares.every(element => element !== null)

    if(!winner && hasNoNull){
        return true;
    }else{
        return false;
    }
}