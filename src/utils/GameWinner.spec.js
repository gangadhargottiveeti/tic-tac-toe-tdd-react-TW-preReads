import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import calculateWinner from "./GameWinner";

describe('calculateWinner function ', () => {
    it('should return the winner correctly when there is winner (X) [Horizontal Win]', () => {
        const squares = ['X','X','X','O',null,'O',null,null,null];
        const expectedWinner = 'X'
        const actualWinner = calculateWinner(squares);
        expect(actualWinner).toBe(expectedWinner);
    })

    it('should return the winner correctly when there is winner (O)', () => {
        const squares = ['O','X','X','O',null,'O','O',null,null];
        const expectedWinner = 'O'
        const actualWinner = calculateWinner(squares);
        expect(actualWinner).toBe(expectedWinner);
    })

    it('should return the winner for diagonal win condition', () => {
        const squares = ['X','O',null,'X','X','O',null,null,'X'];
        const expectedWinner = 'X';
        const actualWinner = calculateWinner(squares);
        expect(actualWinner).toBe(expectedWinner);
    })

    it('should return the winner for vertical win condition', () => {
        const squares = ['X','O',null,'X',null,'O','X',null,null];
        const expectedWinner = 'X';
        const actualWinner = calculateWinner(squares);
        expect(actualWinner).toBe(expectedWinner);
    })

    it('should return null when there is no winner', () => {
        const squares = ['X',null,'X','O',null,'O',null,null,null];
        const actualWinner = calculateWinner(squares);
        expect(actualWinner).toBeNull();
    })
})