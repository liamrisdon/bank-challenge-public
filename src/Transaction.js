class Transaction {

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

    constructFullTransaction() {
        return {
            amount: this.#transactionAmount,
            transactionType: this.#transactionType,
            date: this.#date
        }
    }

}

export default Transaction;