import Account from "../src/Account.js"

describe("displayBalance tests", () => {

    class mockBalance {
        #balance;

        constructor(balance) {
            this.#balance = balance;
        }

        returnBalance() {
            return this.#balance;
        }

    }

    it('should call balances return balance for account displayBalance method', () => {

        //Arrange
        const testBalance = new mockBalance(1000);
        const testAccount = new Account(testBalance);
        const balanceSpy = spyOn(testBalance, "returnBalance");
        //Act
        testAccount.displayBalance();
        //Assert
        expect(balanceSpy).toHaveBeenCalledTimes(1);

    })


})