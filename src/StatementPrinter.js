
class StatementPrinter {

    static printStatement(account) {

        let statementRow = ["date       || credit  || debit   || balance"];
        for (const transaction of account.displayTransactions()) {
            statementRow = [...statementRow, StatementPrinter.formatStatement(transaction.constructFullTransaction(account))]
        }

        statementRow.forEach(transaction => console.log(transaction));
    }
    /*transactions.forEach(transaction => {
        console.log(statement.arrangeDate(transaction[2]) + " || " + statement.arrangeCredit(trans) + " || " + statement.arrangeDebit(trans) + " || " + statement.arrangeBalance(trans));
    })
    */

    static formatStatement(trans) {
        return `${trans.date} || ${trans.type === "deposit" ? trans.amount.toString().padEnd(7, ' ') + " || " + "       " : "       " + " || " + trans.amount.toString().padEnd(7, ' ')} || ${trans.remainingBalance}`
    }

}

export default StatementPrinter;