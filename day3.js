// Problem 1: Given the year of birth, if the age is between 13 and 19 (both included) print Teenage and in between 20 and 29 (both included) print Twenties

const birthYear = 1998;
const currentYear = 2023;
const age = currentYear - birthYear;

if (age >= 13 && age <= 19) {
  console.log("Teenage");
} else if (age >= 20 && age <= 29) {
  console.log("Twenties");
}

// Problem 2 : Given any character, if it is a vowel print "Vowel"

const character1 = "u";

if (
  character == "a" ||
  character == "e" ||
  character == "i" ||
  character == "o" ||
  character == "u"
) {
  console.log("Vowel");
}

// Problem 3 : Given and character if it is a consonant print "Consonant"

const character2 = "z";

if (
  character != "a" &&
  character != "e" &&
  character != "i" &&
  character != "o" &&
  character != "u"
) {
  console.log("Consonant");
}

// Problem 4: Given 3 numbers (all different values), print which is greatest

const num1 = 10;
const num2 = 11;
const num3 = 12;

if (num1 > num2 && num1 > num3) {
  console.log(num1);
} else if (num2 > num1 && num2 > num3) {
  console.log(num2);
} else if (num3 > num1 && num3 > num2) {
  console.log(num3);
}

// Problem 5: Given the days of the week in short format "Sun", "Mon" ... print in long format "Sunday", "Monday",

const day1 = "Sun";
const day2 = "Mon";

if (day1 == "Sun") {
  console.log("Sunday");
}
if (day2 == "Mon") {
  console.log("Monday");
}
