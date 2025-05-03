"use strict"

// Расчёт ширины flex-элементов
// Установочные данные
let givenWidthOfElements = [100, 150, 100];
let widthOfParentElement = 200;
let weightShrink = [1, 1.45, 1];

if (givenWidthOfElements.length !== weightShrink.length)
    throw new Error('Весовых коэффициентов должно быть столько же, сколько и элементов');
let totalWidth = 0;
for (let element of givenWidthOfElements)
    totalWidth += element;
if (totalWidth <= widthOfParentElement)
    throw new Error('Ширина родителя должна быть меньше!');
let negativeWhiteSpace = -1 * (widthOfParentElement - totalWidth);
let resultsOfElementWidths = [];
let iteratorOfWeightShrink = 0;
for (let element of givenWidthOfElements) {
    let shrink = negativeWhiteSpace * (element * weightShrink[iteratorOfWeightShrink] / totalWidth);
    iteratorOfWeightShrink++;
    let newWidth = element - shrink;
    shrink = Math.round(shrink);
    newWidth = Math.round(newWidth);
    resultsOfElementWidths.push(`${newWidth} (-${shrink})`);
}

console.log(`Ширины элементов равны ${resultsOfElementWidths}`);