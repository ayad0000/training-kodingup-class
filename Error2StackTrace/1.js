'use-strict';
/**
 * Class version
 */
class InsufficientFundsError extends Error {
  constructor() {
    super('insufficient balance');

    /**
     * BASED PRACTICE ERROR yg Programmer Professional gunakan setiap pembuatan ERROR
     * Selalu Tambahkan ini Supaya method captureStackTrace di cek terlebih dahulu apakah ada pada Engine JavaScript lainnya
     */
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, InsufficientFundsError);
    }
  }
}

/**
 * Membuat Custom ERROR function tanpa INHERITE (extends) Error  
 * Function Version
 * @param {number} amount 
 */
function calculateTaxError (amount) {
  this.message = ('Invalid amount error');
  this.amount = amount;

  /**
   * BASED PRACTICE ERROR yg Programmer Professional gunakan setiap pembuatan ERROR
   * Selalu Tambahkan ini Supaya method captureStackTrace di cek terlebih dahulu apakah ada pada Engine JavaScript lainnya
   */
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, InsufficientFundsError);
  
  }
}

function calculateTax(amount) {
  /**
   * 
   */
  throw new calculateTaxError(amount);
  return amount * 0.15;
}

function applyInterest(principal) {
  const result = calculateTax(principal * 1.05);
  console.log('finished calculating tax');
  return result;
}

function processPayment(basePrice) {
  const result = applyInterest(basePrice);
  console.log('finished calculating interest');
  return result;
}

try {
  processPayment(100);
} catch (err) {
  /**
   * Cara mengetahui dari stack trace (screenshoot dari call stack, bisa berupa jaringan proses function, atau yg lainnya) mana yg di capture err
   */
  console.log(err.stack);
}
