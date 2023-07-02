import Account from "../src/Account.js"

describe("Account tests", () => {

    class mockBalance {
        #balance;

        constructor(balance) {
            this.#balance = balance;
        }

        returnBalance() {
            return this.#balance;
        }

        addMoney(amount) {
            this.#balance += amount;
        }

    }
    class mockTransaction {

        #transactionAmount;
        #transactionType;
        #date;

        constructor(amount, transactionType, date) {
            this.#transactionAmount = amount;
            this.#transactionType = transactionType;
            this.#date = date;
        }

        getTransactionAmount() {
            return this.#transactionAmount;
        }

        getTransactionType() {
            return this.#transactionType;
        }

        getDate() {
            return this.#date;
        }
    };

    describe("displayBalance tests", () => {



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

    describe("Account Deposit tests", () => {

        let testAccount;
        let testBalance;
        let testTransaction;
        let expected;

        beforeEach(() => {
            testBalance = new mockBalance(0)
            testAccount = new Account(testBalance);
            testTransaction = new mockTransaction(2000.00, "deposit", "14/01/2012");
        })

        afterEach(() => {

            testBalance = undefined;
            testAccount = undefined;
            testTransaction = undefined;
            expected = undefined;

        })


        it('should update account balance when an amounted is deposited', () => {

            //Arrange - before each
            //Act
            expected = 2000.00
            testAccount.deposit(testTransaction);
            //Assert
            expect(testAccount.displayBalance()).toBe(expected);

        })

        it('should add the transaction to the transactions array when a transaction is deposited', () => {

            //Arrange - before each
            //Act
            testAccount.deposit(testTransaction);
            expected = 1;
            //Assert
            expect(testAccount.displayTransactions().length).toBe(expected);

        })

    })

})
