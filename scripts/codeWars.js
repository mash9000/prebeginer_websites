"use strict"

let testData1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
let testData2 = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
let testData3 = [];
let testData4 = [0, 0, 0];

console.log(countPositivesSumNegatives(testData1));

function countPositivesSumNegatives(input) {
    return checkArrayForEmpty(input) || checkArrayForZeros(input) ? [] : [getSumPositiveNumberOfArray(input), getSumNegativeNumberOfArray(input)];
}

function checkArrayForEmpty(input) {
    return input.length === 0 ? true : false;
}

function checkArrayForZeros(input) {
    let countOfZeros = 0;
    for (let element of input) {
        if (element === 0)
            countOfZeros++;
    }
    return countOfZeros === input.length;
}

function getSumPositiveNumberOfArray(input) {
    let sum = 0;
    for (let element of input) {
        if (element > 0)
            sum++;
    }
    return sum;
}

function getSumNegativeNumberOfArray(input) {
    let sum = 0;
    for (let element of input) {
        if (element < 0)
            sum += element;
    }
    return sum;
}