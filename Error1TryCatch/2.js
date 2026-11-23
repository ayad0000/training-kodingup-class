'use strict';

const { InvalidAmountError, InsufficientFundsError } = require('./errors');
const Account = require('./account');

const account = new Account (1, 100);

try {
  account.withdraw(-5);
  console.log('Withdraw succeseded');
} catch (err) {
  /**
   * Bisa langsung memanggil parameter (err) untuk mengecek secara detail mengenai input error yg mana yg terpanggil
   */
  // console.log(err);

  /**
   * Bisa juga hanya menampilkan pesan yg kita tulis untuk keperluan user
   */
  if (err instanceof InvalidAmountError) {
    console.log(`Invalid amount (${err.amount}), please try again`);
  } else if (err instanceof InsufficientFundsError) {
    console.log('Insufficient funds, please try again.');
  } else {
    console.log('Unknown error, please try again');
  }
}