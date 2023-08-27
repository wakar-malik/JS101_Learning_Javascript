// Problem 1 : Given an array print the position (starting with 1) and the element in a single line.

const arr1 = ["apple", "banana", "orange"];

for (let i = 0; i <= arr.length - 1; i++) {
  console.log(i + 1, arr[i]);
}

// Problem 2 : Given a character in lower case print the upper case character

let char = "u";

console.log(char.toUpperCase());

// Problem 3 : Given an array of numbers find the average of all the even numbers.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let sum = 0;
let averageCount = 0;

for (let i = 0; i <= arr.length - 1; i++) {
  if (arr[i] % 2 === 0) {
    sum += arr[i];
    averageCount++;
  }
}

console.log(sum / averageCount);
