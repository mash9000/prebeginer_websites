"use strict";

console.log(typeof [1,3, 3,4]);

console.log(calculateTheResistanceCoefficient(65, 500, 32.32))

function calculateTheResistanceCoefficient(Re, delta, d) {
    if (isNumber(Re) && isNumber(delta) && isNumber(d)) {
        const R1 = 2300;
        const R2 = 500;
        const R3 = 56;

        let makeCalculation = (Re, d, delta) => 64 / Re;
        if (Re < R1) {
            return makeCalculation(Re);
        } else if ((Re >= R1) && (Re <= (R3 * (d / delta)))) {
            makeCalculation = Re => .316 / (Re ** .25);
            return makeCalculation(Re);
        } else if ((R3 * (d / delta) <= Re) && (Re <= R2 * (d / delta))) {
            makeCalculation = (Re, d, delta) => .11 * ((68 / Re) + (delta / d)) ** .25;
            return makeCalculation(Re, d, delta);
        } else if (Re > R2 * (d / delta)) {
            makeCalculation = (Re, d, delta) => .11 * (delta / d) ** .25;
            return makeCalculation(Re, d, delta);
        }
    } else {
        console.log('Пшёл нахр');
    }
}

function isNumber(value) {
    return (typeof value) == 'number';
}