const readlineSync = require('readline-sync');

const generateNumber = +readlineSync.question('Enter a year: ');

const number = String(generateNumber);

const ELEMET_ZODIAC_COUNT = 10;
const ANIMAL_ZODIAC_COUNT = 12;

//use switch
function zodiacElement(number) {
    const index = number % ELEMET_ZODIAC_COUNT;
    switch (index) {
        case 0 : case 1 : 
            return 'metal';
        case 2 : case 3 :
            return 'water';
        case 4 : case 5 :
            return 'wood';
        case 6 : case 7 :
            return 'fire';
        case 7 : case 8 :
            return 'earth';

    }
}

const result = zodiacElement(generateNumber);

//use property
function zodiacAnimal(number) {
    const index = number % ANIMAL_ZODIAC_COUNT;
    let animals = {
        0 : 'monkey',
        1 : 'rooster',
        2 : 'dog',
        3 : 'pig',
        4 : 'rat',
        5 : 'ox',
        6 : 'tiger',
        7 : 'rabbit',
        8 : 'dragon',
        9 : 'snake',
        10 : 'horse',
        11 : 'sheep',
    }
    return animals[index];
}

const result2 = zodiacAnimal(number);

console.log(`The Chinese zodiac for year ${generateNumber} is ${result2}`)
console.log(`The Chinese zodiac element for year ${generateNumber} is ${result}`)