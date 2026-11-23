'use-strict';

const { InvalidAmountError, InsufficientFundsError } = require('./errors');

/**
 * For training how to use ERROR methods
 */
class Account {
  /**
   * Initialize an instance of account.
   * @param {number} id 
   * @param {number} balance 
   * @constructor
   */
  constructor(id, balance) {
    this.id = id;
    this.balance = balance;
  }

  /**
   * Withdraw given amount from the account.
   * @param {number} amount 
   */
  withdraw(amount) {
    if (amount < 0) {
      throw new InvalidAmountError(amount);
    }

    if (this.balance < amount) { 
    throw new InsufficientFundsError();
  }

  this.balance -= amount;
  }
}

module.exports = Account;