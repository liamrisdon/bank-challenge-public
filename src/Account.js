class Account {

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
    }

    withdraw(transaction) {
        const debit = transaction.getTransactionAmount();
        if (debit > this.displayBalance()) {
            throw new Error("Insufficient funds");
        }
        this.#accountBalance.takeMoney(debit);
        this.#transactionsList.push(transaction);
    }


}

export default Account;