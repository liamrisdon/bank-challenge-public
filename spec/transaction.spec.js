import Transaction from "../src/Transaction.js"

let testTransaction

describe("Transaction Getter Tests", () => {

    beforeEach(() => {
        testTransaction = new Transaction(2000.00, "deposit", "14/01/2012");
    });

    afterEach(() => {
        testTransaction = undefined;
        const expected = undefined;
    })


    it('should return the expected transactionAmount', () => {

        //Arrange - beforeEach
        //Act
        const expected = 2000.00;
        //Assert
        expect(testTransaction.getTransactionAmount()).toBe(expected);

    })

    it('should return the expected transaction type', () => {

        //Arrange - beforeEach
        //Act
        const expected = "deposit";
        //Assert
        expect(testTransaction.getTransactionType()).toBe(expected);

    })

    it('should return the expected date', () => {

        //Arrange - beforeEach
        //Act
        const expected = "14/01/2012";
        //Assert
        expect(testTransaction.getDate()).toBe(expected);
    })

    it('should return full transaction details when constructTransactionDetails is called', () => {

        //Arrange - before each
        //Act
        const expected = ({ amount: 2000, transactionType: 'deposit', date: '14/01/2012' })
        //Assert
        expect(testTransaction.constructFullTransaction()).toEqual(expected);
    })

})