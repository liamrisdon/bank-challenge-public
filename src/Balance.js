class Balance {

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

export default Balance;