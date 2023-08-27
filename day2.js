// Problem 1: If the number is divisible by 3, print a "multiple of 3".

const num = 9;

if (num % 3 === 0) {
  console.log(num);
}

// Problem 2: If a person is allowed to drive in India print "Apply for a license" or "NA".

const age = 18;

if (age >= 18) {
  console.log("Apply for lisence");
} else {
  console.log("NA");
}

// Problem 3: Given 2 numbers a and b print which is greater or "both equal".

const a = 10;
const b = 15;

if (a > b) {
  console.log("a is greater than b!");
} else if (b > a) {
  console.log("b is greater than a!");
} else {
  console.log("Both numbers are equal!");
}

// Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

const userName = "steven";
const password = "11111";

if (userName === "steven" && password === "11111") {
  console.log("Login successful!");
} else {
  console.log("Please enter correct userName or password!");
}
