'use-strict';
/**
 * ERROR describe about Invalid withdraw, which occurs when the amount entered by the user exceeds the available balance.
 */
class InsufficientFundsError extends Error {
  constructor() {
    super('insufficient balance');
  }
}

/**
 * ERROR describe about Invalid withdraw, which occurs when the amount entered is negative number.
 */
class InvalidAmountError extends Error {
  /**
   * Initialize an instance of InvalidAmountError
   * @param {number} amount 
   */
  constructor(amount) {
    super('Invalid amount error');
    this.amount = amount;
  }
}

module.exports = { InsufficientFundsError, InvalidAmountError };