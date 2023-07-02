import StatementPrinter from "../src/StatementPrinter.js";

describe("StatementPrinter tests", () => {

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

    class mockTransaction {

        #transactionAmount;
        #transactionType;
        #date;
        #remainingBalance;


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

        setRemainingBalance(num) {
            this.#remainingBalance = num;
        }

        constructFullTransaction(account) {
            return {
                amount: this.#transactionAmount.toFixed(2),
                type: this.#transactionType,
                date: this.#date,
                remainingBalance: this.#remainingBalance.toFixed(2)
            }
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

    let testBalance, testAccount, testTransaction, testTransactionTwo;

    beforeEach(() => {
        testBalance = new mockBalance(0);
        testAccount = new mockAccount(testBalance);
    });

    afterEach(() => {
        testBalance = undefined;
        testAccount = undefined;
    })


    it('should print header when printStatement is called', () => {

        //Arrange - before each
        //Act
        const logSpy = spyOn(global.console, "log");
        StatementPrinter.printStatement(testAccount);
        //Assert
        expect(logSpy).toHaveBeenCalledTimes(1);

    })

    it('should print header and first transaction which is a deposit', () => {

        //Arrange
        testTransaction = new mockTransaction(1000.00, "deposit", "10/01/2012");
        //Act
        testAccount.deposit(testTransaction);
        const logSpy = spyOn(global.console, "log");
        StatementPrinter.printStatement(testAccount);
        //Assert
        expect(logSpy).toHaveBeenCalledTimes(2);

        //checked format with index.js
    })

    it('should print header, first deposit transaction and second withdrawal transaction', () => {

        //Arrange
        testTransaction = new mockTransaction(1000.00, "deposit", "10/01/2012");
        testTransactionTwo = new mockTransaction(200, "withdrawal", "12/01/2012");
        //Act
        testAccount.deposit(testTransaction);
        testAccount.withdraw(testTransactionTwo);
        const logSpy = spyOn(global.console, "log");
        StatementPrinter.printStatement(testAccount);
        //Assert
        expect(logSpy).toHaveBeenCalledTimes(3);

    })

})