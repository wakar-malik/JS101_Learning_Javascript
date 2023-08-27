// Problem 1: Print the numbers from the given starting point till ending point (including both start and end)

let num1 = 1;

while (num1 <= 10) {
  console.log(num1);

  num1++;
}

// Problem 2: Print the odd numbers from 0 till the given limit

let num2 = 0;
const max2 = 10;

while (num2 <= max2) {
  if (num2 % 2 === 1) {
    console.log(num2);
  }

  num2++;
}

// Problem 3: Print the sum of all the multiples of 3 from 0 to the given limit

let num3 = 0;
const max3 = 10;

while (num3 <= 10) {
  if (num3 % 3 === 0) {
    console.log(num3);
  }

  num3++;
}

// Problem 4: Print the average of even numbers from 1 to 100 (both included)

let num = 0;
let average = 0;

while (num <= 100) {
  if (num % 2 === 0) {
    average += 1;
  }
  num++;
}

console.log(average);
