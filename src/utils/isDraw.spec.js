import { render, screen } from "@testing-library/react";
import isDraw from "./isDraw";

describe('Draw method functionality', () => {
    it('should return true if there is a draw in game', () => {
        const squares = ['X','O','X','O','O','X','X','X','O'];
        const expectedResult = true;
        const actualResult = isDraw(squares);
        expect(actualResult).toBe(expectedResult);
    })

    it('should return false if there is a no draw in game', () => {
        const squares = ['X','X','X','O','O',null,null,null,null];
        const expectedResult = false;
        const actualResult = isDraw(squares);
        expect(actualResult).toBe(expectedResult);
    })
})