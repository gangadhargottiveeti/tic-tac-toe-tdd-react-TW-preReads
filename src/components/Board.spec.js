import {getAllByRole, render, screen} from '@testing-library/react'
import Board from './Board'

describe('<Board />', () => {

    beforeEach(() => {
        render(<Board />);
    })

    it('should render the board correctly on screen', () => {
        const renderedBoardElement = screen.getByTestId('game-board');

        expect(renderedBoardElement).toBeInTheDocument();
    })

    it('should render 9 squares in the game board', () => {
        const expectedTotalSquares = 9;
        const totalSquaresRendered = screen.getAllByRole('button');

        expect(totalSquaresRendered).toHaveLength(expectedTotalSquares);
    })

    it('should render with null initial value for squares', () => {
        const squares = screen.getAllByRole('button');
        squares.forEach((square) => {
            expect(square).toHaveTextContent('');
        })
    })

    it('should render the status', () => {
        const statusRendered = screen.getByTestId('status')
        expect(statusRendered).toBeInTheDocument();
    })

})