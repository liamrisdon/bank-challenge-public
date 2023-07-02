import Account from "../src/Account.js"
import Balance from "../src/Balance.js"
import Transaction from "../src/Transaction.js"
import StatementPrinter from "./StatementPrinter.js";

const testTransaction = new Transaction(500, "withdrawal", "14/01/2012");
const testTransactionTwo = new Transaction(2000, "deposit", "12/01/2012");
const testTransactionThree = new Transaction(1000, "deposit", "10/01/2012");
const testBalance = new Balance(0)
const testAccount = new Account(testBalance);
new StatementPrinter;



testAccount.deposit(testTransactionThree); testAccount.deposit(testTransactionTwo); testAccount.withdraw(testTransaction);


StatementPrinter.printStatement(testAccount);




