# Bank Challenge

Criteria: 
**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see
```
date       || credit  || debit  || balance
14/01/2012 ||         || 500.00 || 2500.00
13/01/2012 || 2000.00 ||        || 3000.00
10/01/2012 || 1000.00 ||        || 1000.00
```

Initial Planning Thoughts:
- Need to create user stories and domain models for depositing and withdrawing money, as well as being able to see the balance - so will need an account class, some kind of transaction class and a balance class.
- Will also need a statement class to handle the formatting of the bank statement - this will require organizing by date to have the correct output.
- Finally need to test that the output will be in the correct format.

Classes needed:
1. balance class
2. account class
3. transaction class - constructs transactions (i.e. date, amount etc)
4. statement printer class


### User Story 1
```
As a user
I want to be able to see my bank balance
So that I know how much money I have
```
#### Domain Model 1
| Objects     | Properties                     | Messages          | Output   |
| ----------- | ------------------------------ | ----------------- | -------- |
| Account     | accountBalance @number         | displayBalance()  | @number  |
|             |                                |                   |          |
| Balance     | balance @number                | returnBalance()   | @number  |
#### Tests 
1. Account's `displayBalance()` should call balance's `returnBalance()`.
2. Account's `displayBalance()` should return the expected value of initial balance.
### User Story 2
```
As a user
I want to be able to deposit a given amount of money from my bank account
So that I can pay for things
```
#### Domain Model 2
| Objects        | Properties                     | Messages            | Output             |
| -------------- | ------------------------------ | ------------------- | ------------------ |
| Account        |accountBalance @number          |displayBalance()     | @number            |
|                |                                |deposit(@transaction)| @void              |
|                |transactions@Array[@transaction]|displayTransactions()|@Array[@transaction]|
|                |                                |                     |                    |
| Balance        |balance @number                 |returnBalance()      | @number            |
|                |                                |                     |                    |
| Transaction    |Amount @number,                 |getDepositAmount()   |@number             |
|                |transactionType @string,        |getWithdrawalAmount()|@number             |
|                |date                            |getDate()            |@date               |
#### Tests 
I anticipate as part of the transaction class I will need a number of getters to implement deposit and withdrawal functionality in the account class.

1. Test that a new transaction object can be instantiated with a correct depositAmount.
2. Test that a new transaction object can be instantiated with a correct date.
3. Test that when a `transaction` is created and passed into `deposit()` then it updates the accounts balance. 
4. Test that when `deposit()` is called, the transaction is added to account transaction array.
5. Test that when a new deposit is complete, `displayTransactions()` returns the transactions array.
6. Test that when a new deposit is complete, `displayTransactions()` returns the transactions array with date and amount. 
7. Test that an error is throw if `deposit()` is passed something other than a number
### User Story 3
```
As a user
I want to be able to withdraw a given amount of money
So that I can add money to my bank account
```
#### Domain Model 3
| Objects        | Properties                     | Messages             | Output             |
| -------------- | ------------------------------ | -------------------- | ------------------ |
| Account        |accountBalance @number          |displayBalance()      | @number            |
|                |                                |deposit(@transaction) | @void              |
|                |                                |withdraw(@transaction)| @void              |
|                |transactions@Array[@transaction]|displayTransactions() |@Array[@transaction]|
|                |                                |                      |                    |
| Balance        |balance @number                 |returnBalance()       | @number            |
|                |                                |                      |                    |
| Transaction    |Amount @number,                 |getDepositAmount()    |@number             |
|                |transactionType @string,        |getWithdrawalAmount() |@number             |
|                |date                            |getDate()             |@date               |
#### Tests 
1. Test that a new transaction object can be instantiated with a correct withdrawalAmount.
2. Test that when a `transaction` is created and passed into `withdraw()` then it updates the accounts balance.
3. Test that when `withdraw()` is called, the transaction is added to account transaction array.
4. Test that `withdraw()` throws error if it tries to withdraw more than the account balance.
### User Story 4
```
As a user
I want to be able to look at the past transactions I have made, formatted correctly
So that I can keep track of my spending
```
#### Domain Model 4
| Objects        | Properties                     | Messages             | Output             |
| -------------- | ------------------------------ | -------------------- | ------------------ |
| Account        |accountBalance @number          |displayBalance()      | @number            |
|                |                                |deposit(@transaction) | @void              |
|                |                                |withdraw(@transaction)| @void              |
|                |transactions@Array[@transaction]|displayTransactions() |@Array[@transaction]|
|                |                                |                      |                    |
| Balance        |balance @number                 |returnBalance()       | @number            |
|                |                                |                      |                    |
| Transaction    |Amount @number,                 |getDepositAmount()    |@number             |
|                |transactionType @string,        |getWithdrawalAmount() |@number             |
|                |date                            |getDate()             |@date               |
|StatementPrinter|                                |printStatement()      |@table              |
#### Tests 
1. Test that `printStatement()` will print `date       || credit  || debit  || balance`
2. Test that `displayTransactions()` returns transaction array which is date ordered.
3. Test that `printStatement()` with 1 transaction in the array will return a correctly formatted table.
4. Test that `printStatement()` can print a table that matches the requirements.


note:
^transaction id?







