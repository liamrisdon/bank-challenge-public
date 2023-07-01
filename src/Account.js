class Account {

    #accountBalance;

    constructor(balance) {
        this.#accountBalance = balance;
    }

    displayBalance() {
        return this.#accountBalance.returnBalance();
    }


}

export default Account;