// Write a function named addNumbers which takes two numbers as input and return their sum

// Use the function to calculate the sum of given three numbers

function sumOfTwo(a, b) {
  return a + b;
}

function sumOfThree(num1, num2, num3) {
  const totalSum = sumOfTwo(num1, num2) + num3;

  console.log(totalSum);
}

sumOfThree(2, 3, 5);

// Write code to find the absolute difference of two numbers

// Sample Input-1 12,4
// Sample Output-1 8
// Sample Input-2 4,18
// Sample Output-2 14

function difference(num1, num2) {
  return num1 - num2;
}

function absoulteDifference(num1, num2) {
  const absolute = Math.abs(difference(num1, num2));

  console.log(absolute);
}

absoulteDifference(5, 2);
absoulteDifference(5, 7);

// Write a function isOdd which returns a boolean value based on the number is odd or not
// Use this function to print the odd numbers from 0 to a given limit(included)

function isOdd(num) {
  if (num % 2 === 1) {
    return true;
  } else {
    return false;
  }
}

function printOdd(num) {
  for (let i = 0; i <= num; i++) {
    const odd = isOdd(i);

    if (odd) {
      console.log(i);
    }
  }
}

printOdd(10);

// Write code to calculate the average of an array
// If there are no items in the array it should return 0
// NOTE: Create a function to find the sum of elements in an array and use that function to find out the average

function sumOfArr(arr) {
  let sum = 0;

  for (let i = 0; i <= arr.length - 1; i++) {
    sum += arr[i];
  }

  return sum || 0;
}

function findAverage(arr) {
  const num = sumOfArr(arr);

  console.log(num / arr.length);
}

findAverage([5, 3, 2, 5]);

// Write a function to convert a character to lower case
// Use this function to convert a given word to lower case
// Use that function to convert an array of strings to array of lower case strings
// Sample Input ["MA", "SA", "I", "SCH", "OOL"]
// Sample Output ["ma", "sa", "i", "sch", "ool"]

function convertWord(char) {
  return char.toUpperCase();
}

function buildNewArr(arr) {
  const newArr = [];

  for (let i = 0; i <= arr.length - 1; i++) {
    let bag = "";
    for (let j = 0; j <= arr[i].length - 1; j++) {
      bag += convertWord(arr[i][j]);
    }
    newArr.push(bag);
  }

  console.log(newArr);
}

buildNewArr(["MA", "SA", "I", "SCH", "OOL"]);

// Given a string swap the case and print the output
// Sample Input - Test
// Sample Output - tEST
// NOTE: Use multiple functions to achieve the result, NOT one single code block

function convertLetter(char) {
  const upperLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase();

  // const lowerLetter = 'acdefghijklmnopqrstuvwxyz';

  for (let i = 0; i <= upperLetter.length - 1; i++) {
    if (char === upperLetter[i]) {
      return char.toLowerCase();
    }
  }

  for (let i = 0; i <= lowerLetter.length - 1; i++) {
    if (char === lowerLetter[i]) {
      return char.toUpperCase();
    }
  }
}

function printLetter(str) {
  let newStr = "";

  for (let i = 0; i <= str.length - 1; i++) {
    newStr += convertLetter(str[i]);
  }

  console.log(newStr);
}

printLetter("Test");

// Create a function to check if a number is Prime or Not

function isPrime(num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      count++;
    }
  }
  if (count == 2) {
    return true;
  } else {
    return false;
  }
}

console.log(isPrime(4));

// Use the above function to print the Primes from 2 to a given limit

function checkPrime(num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      count++;
    }
  }

  if (count == 2) {
    return true;
  } else {
    return false;
  }
}

function printPrimes(num) {
  for (let i = 2; i <= num; i++) {
    if (checkPrime(i)) {
      console.log(i);
    }
  }
}

printPrimes(20);

// Use the same function to print Non-Primes from 2 to a given limit
function checkPrime(num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      count++;
    }
  }

  if (count > 2) {
    return true;
  } else {
    return false;
  }
}

function printPrimes(num) {
  for (let i = 2; i <= num; i++) {
    if (checkPrime(i)) {
      console.log(i);
    }
  }
}

printPrimes(20);

// Write a function to check if the char is a small case or not.

function checkChar(char) {
  if (char === char.toLowerCase()) {
    console.log("lowerCase");
  } else {
    console.log("upperCase");
  }
}

checkChar("U");

// Write a function to replace spaces in a given string with -

function replace(str) {
  let str1 = "";

  for (let i = 0; i <= str.length - 1; i++) {
    if (str[i] === " ") {
      str1 += "_";
    } else {
      str1 += str[i];
    }
  }

  return str1;
}

function getNewStr(str) {
  const newStr = replace(str);

  console.log(newStr);
}

getNewStr("Masai School");
