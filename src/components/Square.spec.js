import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import Square from "./Square";

describe('<Square />', () => {

    beforeEach(() => {
        render(<Square value={'X'} testId={0}/>);
    })
    let sendHandler;

    async function squareClick() {
        sendHandler = jest.fn().mockName('handleClick');

        render(<Square testId={4} onSquareClick={sendHandler} />)

        userEvent.click(screen.getByTestId('square4'))
    }

    
    it('should render the square component correctly', () => {
        const renderedSquareElement = screen.getByTestId('square0');

        expect(renderedSquareElement).toBeInTheDocument();
    })

    it('should render with the correct value passed through props (X)', () => {
        render(<Square value={'X'} onSquareClick={() => {}}/>)

        const renderedValue = screen.getByTestId('square0');
        expect(renderedValue).toHaveTextContent('X')
        
    })

    it('should render with the correct value passed through props (O)', () => {
        render(<Square value={'O'} testId={1} onSquareClick={() => {}}/>)

        const renderedValue = screen.getByTestId('square1');
        expect(renderedValue).toHaveTextContent('O')
        
    })


    it('should call the onClick handler when clicked', async() => {
        await squareClick();
        expect(sendHandler).toHaveBeenCalled();
    })

})