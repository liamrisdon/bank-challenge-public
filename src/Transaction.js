class Transaction {

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


export default Transaction;