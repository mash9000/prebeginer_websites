"use strict";

console.log(randomDesc('female', 'Ольга'));

function solveTheQuadraticEquation(a, b, c) {
    let D = b ** 2 - 4 * a * c;
    if (D < 0) {
        return null;
    } else if (D == 0) {
        return {x: -b / (2 * a)};
    } else if (D > 0) {
        return {
            x1: (-b - Math.sqrt(D)) / (2 * a),
            x2: (-b + Math.sqrt(D)) / (2 * a),
        };
    }
}

function randomDesc(gender, name) {
    if (checkGender(gender) && checkName(name)) {
        let descMale = [
            "Ужасный",
            "Весёлый",
            "Отвратительный",
            "Грустный",
            "Тактичный",
        ];

        let descFemale = [
            "Ужасная",
            "Весёлая",
            "Отвратительная",
            "Грустная",
            "Тактичная",
        ];

        if (gender == "male") {
            return descMale[getRandomInt(descMale.length - 1)] + " " + name;
        } else {
            return descFemale[getRandomInt(descFemale.length - 1)] + " " + name;
        }
    } else {
        alert("Пшёл нахуй!");
    }
}

function checkGender(gender) {
    return gender != null && (gender == "male" || gender == "female");
}

function checkName(name) {
    return name != null;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}