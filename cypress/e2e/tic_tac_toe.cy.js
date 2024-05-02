const appURL = "http://localhost:3000/"

describe("Tic Tac Toe Game", ()=>{

    beforeEach(() => {
        cy.visit(appURL);
    })

    it('should render the game board', () => {
        cy.get('.game-board').should('exist');
    })

    it('should display the game board with 9 squares', () => {
        const totalSquares = 9;
        cy.get('.square').should('have.length', totalSquares);
    })

    it('should display the letter on square when it is clicked', () => {
        cy.get('.square').eq(0).click().should('contain', 'X')
    })

    it('should switch turns between X and O after each move', () => {
        cy.get('.square').eq(0).click().should('contain', 'X');
        cy.get('.square').eq(1).click().should('contain', 'O');
        cy.get('.square').eq(2).click().should('contain', 'X');
        cy.get('.square').eq(4).click().should('contain', 'O');
    })

    it('should display the status of who is next player correctly (when no win or draw condition)', () => {
        cy.get('.status').should('contain', 'Next Player : X');
        cy.get('.square').eq(0).click()
        cy.get('.status').should('contain', 'Next Player : O');
    })

    it('should detect horizontal win', () => {
        cy.get('.square').eq(0).click()
        cy.get('.square').eq(3).click()
        cy.get('.square').eq(1).click()
        cy.get('.square').eq(4).click()
        cy.get('.square').eq(2).click()
        cy.get('.status').should('contain', 'Winner : X')
    })

    it('should detect vertical win', () => {
        cy.get('.square').eq(0).click()
        cy.get('.square').eq(1).click()
        cy.get('.square').eq(3).click()
        cy.get('.square').eq(2).click()
        cy.get('.square').eq(6).click()
        cy.get('.status').should('contain', 'Winner : X')
    })

    it('should detect diagonal win', () => {
        cy.get('.square').eq(0).click()
        cy.get('.square').eq(1).click()
        cy.get('.square').eq(4).click()
        cy.get('.square').eq(2).click()
        cy.get('.square').eq(8).click()
        cy.get('.status').should('contain', 'Winner : X')
    })

    it('should detect winner correctly (test for O)', () => {
        cy.get('.square').eq(0).click()
        cy.get('.square').eq(1).click()
        cy.get('.square').eq(3).click()
        cy.get('.square').eq(4).click()
        cy.get('.square').eq(5).click()
        cy.get('.square').eq(7).click()
        cy.get('.status').should('contain', 'Winner : O')
    })

    it('should detect the draw condition', () => {
        cy.get('.square').eq(0).click()
        cy.get('.square').eq(1).click()
        cy.get('.square').eq(2).click()
        cy.get('.square').eq(3).click()
        cy.get('.square').eq(5).click()
        cy.get('.square').eq(4).click()
        cy.get('.square').eq(6).click()
        cy.get('.square').eq(8).click()
        cy.get('.square').eq(7).click()
        cy.get('.status').should('contain', 'Draw')
    })

})