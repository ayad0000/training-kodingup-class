'use strict';

const land = {
    width: 20,
    length: 10,
    calculatePrice(pricePerSqm, currency) {
        return currency + this.width * this.length * pricePerSqm;
    }
}

const calculateLandPrice = land.calculatePrice.bind(land);

console.log(calculateLandPrice(10, '$')); // $2000