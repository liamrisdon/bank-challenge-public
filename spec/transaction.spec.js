import Transaction from "../src/Transaction.js"

let testTransaction, testAccount, testBalance

describe("Transaction Getter Tests", () => {

    class mockAccount {

        #accountBalance;
        #transactionsList = [];

        constructor(balance) {
            this.#accountBalance = balance;
        }

        displayBalance() {
            return this.#accountBalance.returnBalance();
        }

        displayTransactions() {
            return this.#transactionsList;
        }

        deposit(transaction) {
            const credit = transaction.getTransactionAmount();
            this.#accountBalance.addMoney(credit);
            this.#transactionsList.push(transaction);
            transaction.setRemainingBalance(this.displayBalance());
        }

        withdraw(transaction) {
            const debit = transaction.getTransactionAmount();
            if (debit > this.displayBalance()) throw new Error("Insufficient funds");
            this.#accountBalance.takeMoney(debit);
            this.#transactionsList.push(transaction);
            transaction.setRemainingBalance(this.displayBalance());
        }

    }

    class mockBalance {

        #balance;

        constructor(inputBalance = 0) {
            this.#balance = inputBalance
        }

        returnBalance() {
            return this.#balance;
        }

        addMoney(amount) {
            this.#balance += amount;
        }

        takeMoney(amount) {
            this.#balance -= amount;
        }

    }

    beforeEach(() => {
        testTransaction = new Transaction(2000.00, "deposit", "14/01/2012");
        testBalance = new mockBalance(5000.00);
        testAccount = new mockAccount(testBalance);
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
        const expected = ({ amount: '2000.00', type: 'deposit', date: '14/01/2012', remainingBalance: '3000.00' })
        testAccount.withdraw(testTransaction);
        //Assert
        expect(testTransaction.constructFullTransaction()).toEqual(expected);
    })

})