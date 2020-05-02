'use strict'

const fibonacci = () => {
    let aNumbers = [0, 1];
    let countGen = aNumbers.length;

    for (let count = 0; count < countGen; count++) {
        aNumbers.push(aNumbers[count] + aNumbers[count + 1]);
        if (aNumbers[countGen] > 350) {
            return aNumbers;
        }
        countGen += 1;
    }
}

const isFibonnaci = (num) => {
    return fibonacci().includes(num);
}

module.exports = {
    fibonacci,
    isFibonnaci
}