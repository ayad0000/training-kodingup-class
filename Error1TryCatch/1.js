function Account(id, balance) {
  this.id = id;
  this.balance = balance;
}

Account.prototype.withdraw = function(amount) {
  /**
   * GUARD PATTERN
   * sebagai fungsi Penjaga supaya inputnya di cek terlebih dahulu sebelum memasuki rumah (output)
   */
  // if (this.balance < amount) {
  //   return false;
  // }

  // this.balance -= amount;
  //   return true;

  /**
 * PYRAMID OF DOOM
 * Hal yg tidak dianjurkan dalam penggunaan if else
 * saking banyaknya input true yg menyebabkan bentuk if nya seperti Pyramid >
 * Disarankan menggunakan syntax GUARD PATTERN
 */
// if (this.balance >= amount) {
//   if (...) {
//     if (...) {
//       if (...) {
//         this.balance -= amount;
//         return true;
//       }
//     }
//   }
// }

/**
 * ERROR Syntax
 * Penggunaan Object ERROR pada prototype withdraw 
 * Jadi function itu bukan hanya menghasilkan output RETURN VALUE, tetapi menghasilkan output THROW ERROR
 * Khusus Syntax TRY wajib dengan CATCH, karena mereka berpasangan yg dimana harus ada ke-dua nya tidak boleh ditulis salah satu saja
 * @type {number} amount - jumlah saldo dari account 1 yg akan dikurangi
 * @returns {number} sisa saldo yg telah dikurangi
 * @returns ERROR (optional) apabila inputnya tidak sesuai
 */
  if (this.balance < amount) { 
    throw new Error('Insufficient balance');
  }

  this.balance -= amount;
};


const account = new Account (1, 100);

/**
 * Berikut cara pemanggilan function ERROR yg mewajibkan menulis TRY & CATCH
 * keunggulan ERROR bisa menampilkan output true nya terlebih dahulu, karena apabila ada error atau false, maka akan otomatis outputnya pindah ke catch
 */
try {
  account.withdraw(1e6);
  console.log('Withdraw succeseded');
} catch (err) {
  console.log('insufficient balance');
}