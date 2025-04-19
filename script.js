"use strict";
let a = 2,
  b = 4342,
  c = -43992;
let D = b ** 2 - 4 * a * c;
console.log(`Дискриминант равен ${D}`);
if (D < 0) {
  console.log("Корней нет");
} else if (D == 0) {
  let x = -b / (2 * a);
  console.log(`Единственный корень: ${x.toFixed(1)}`);
} else if (D > 0) {
  let x1 = (-b + Math.sqrt(D)) / (2 * a);
  let x2 = (-b - Math.sqrt(D)) / (2 * a);
  console.log(`Два корня: ${x1.toFixed(1)} и ${x2.toFixed(1)}`);
}

let htmlTxt = "<p>Какой-нибудь текст</p>";
let cssTxt =
  '<style>p{font:bold 30px "Arial";width:300px;margin:0 auto;}</style>';

let human = { name: "Ivan", dayOfBirth: 1, monthOfBirth: 3, yearOfBirth: 1998 };
console.log(human);
human['height'] = 183;
console.log(human);

for(let key of Object.keys(human)){
    console.log(`${key}=${human[key]}`);
}