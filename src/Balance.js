class Balance {

    #balance = 0;

    constructor(inputBalance) {
        this.#balance = inputBalance
    }

    returnBalance() {
        return this.#balance;
    }

}

export default Balance;