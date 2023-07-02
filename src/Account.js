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

    orderTransactions() {
        return this.#transactionsList.reverse();
    }

    deposit(transaction) {
        const credit = transaction.getTransactionAmount();
        this.#accountBalance.addMoney(credit);
        this.#transactionsList.push(transaction);
        transaction.setRemainingBalance(this.displayBalance());
    }

    // should implement some kind of transaction validation method to reduce method length
    withdraw(transaction) {
        const debit = transaction.getTransactionAmount();
        if (debit > this.displayBalance()) throw new Error("Insufficient funds");
        this.#accountBalance.takeMoney(debit);
        this.#transactionsList.push(transaction);
        transaction.setRemainingBalance(this.displayBalance());
    }

}

export default Account;