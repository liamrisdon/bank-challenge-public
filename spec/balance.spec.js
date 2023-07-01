import Balance from "../src/Balance.js"

describe("Balance Tests", () => {

    it('should return the balance constructed when getBalance is called', () => {

        //Arrange
        let testBalance = new Balance(1000);
        //Act
        const expected = 1000;
        //Assert
        expect(testBalance.returnBalance()).toBe(expected);

    })
})