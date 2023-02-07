// Propblem 1:
// Create a functiion which will retun a value by multiplying 3 with the inputted value, then adding 10, then dividing 2, and then subtructing 5.
// Input value must be a POSITIVE NUMBER.

function mindGame(positiveNumber) {

    if ((typeof positiveNumber) !== "number" || positiveNumber < 0) {
        return 'Please input a valid data. Data must be a positive number.';
    }
    else {
        let totalValue = (((positiveNumber * 3) + 10) / 2) - 5;
        return totalValue;
    }

}

// Problem 2:
// Create a function which will calculate the total number of character of a string. If the number of character of the string is an odd number then the function will retun 'Odd' and if the number of character of the string is an even number then the funtion will return 'Even'.
// Input value must be a STRING.

function evenOdd(inputString) {

    if ((typeof inputString) !== "string") {
        return 'Please input a valid data. Data must be a string.';
    }
    else if (inputString.length % 2 == 0) {
        return 'Even';
    }
    else {
        return 'Odd';
    }

}

// Problem 3:
// Create a fuction. If the difference between input value and 7 is less than 7 then the function will return the result of the difference and otherwise the function will return double of the inputted value. 
// input vaule must be a NUMBER.

function isLGSeven(compareSeven) {

    if ((typeof compareSeven) !== "number") {
        return 'Please input a valid data. Data must be a number.';
    }
    else if (compareSeven - 7 < 7) {
        return compareSeven - 7;
    }
    else {
        return compareSeven * 2;
    }

}

// Problem 4:
// Create of function where the type of input data will be an array of numbers. Among the array elements which are negative numbers they will be treated as Bad data and which are positive numbers they will be treated as Good data. The function will retun the total number of array elements which are treated as Bad data. 

function findingBadData(goodBadArr) {
    if (Array.isArray(goodBadArr)) {

        let badData = [];

        for (let i = 0; i < goodBadArr.length; i++) {
            if (goodBadArr[i] < 0) {
                badData.push(goodBadArr[i]);
            }
        }
        return badData.length;
    }
    else {

        return 'Please input a valid data. Data must be an Array of numbers.';
    }

}

// Problem 5:
// Create a function where you have to input 3 numbers as Gems point of your three friends in the arguments of the function. The power of the Gems point of your three friends is 21, 32, and 43 respectively. Here Power of Gems point means how many Diamonds will be executed by a single Gem.The function will return the number of total Diamonds when all Gems of your three friends combined. If the number of total Diamonds greater than 2000 then function will return a value deducting 2000 from the number of total Diamonds.

function gemsToDiamond(firstFrGems, secondFrGems, thirdFrGems) {

    const firstFrGPower = firstFrGems * 21;
    const secondFrGPower = secondFrGems * 32;
    const thirdFrGPower = thirdFrGems * 43;

    let totalDiamond = firstFrGPower + secondFrGPower + thirdFrGPower;

    if (totalDiamond > 1000 * 2) {

        let restTotalDiamond = totalDiamond - 1000 * 2;

        return restTotalDiamond;
    }

    else {

        return totalDiamond;
    }

}


