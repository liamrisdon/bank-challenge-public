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



}

export default Transaction;