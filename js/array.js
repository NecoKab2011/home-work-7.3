const number1 = [8, 3, 9];
numbers1[1] = 10;
console.log(number1);

const string1 = ["pen", "line", "TV"];
string1[3] = "mouse";
console.log(string1);

let sum = 0;
const number2 = [6, 8, 10, 18];
for (let i = 0; i < number2.length; i++) {
  sum = sum + number2[i];
}
console.log(sum);

const number3 = [2, 82, 50, 8, 45];
for (let i = 0; i < number3.length; i++) {
  console.log(number3[i]);
}

const string2 = ["lemon", "iPad", "found", "water", "hello"];
for (let i = 0; i < string2.length; i++) {
  if (string2.length < 5) {
    continue;
  }
  console.log(string2[i]);
}

const number4 = [45, 71, 9, 1, 36, 47, 322, 123, 840, 0.5];
let maxNumber = number4[0];
for (const number of number4) {
  if (number > maxNumber) {
    maxNumber = number;
  }
}
console.log(maxNumber);

const number5 = [42, 71, 10, 14, 36, 47, 322, 123, 840, 0.5];
for (const number of numbers5) {
    if (i % 2 === 0) {
      continue;
    }
    console.log(number[i]);
  }





































































