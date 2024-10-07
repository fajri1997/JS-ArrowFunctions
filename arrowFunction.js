// Rewrite the following function as an arrow function:
/******************************
	function greet(name) {
	  return `Hello, ${name}!`;
	}
********************************/

const greet = (name) => `Hello, ${name}!`;

console.log(greet("fajir"));

// Write a simple arrow function that takes two parameters and returns their sum.

const sumNumber = (num1, num2) => num1 + num2;

console.log(sumNumber(3, 5));

// Write a simple arrow function that squares a number.
const numsquares = (num1) => num1 * num1;
console.log(numsquares(5));

// [🌶️🌶️] Create an arrow function that takes an array of numbers and returns a new array with each number squared.

//mumber + 5
const addNewNum = (numbers) => numbers.map((num) => num + 5);
const numbersArray = [1, 4, 6, 12, 33];
const updatedArray = addNewNum(numbersArray);
console.log(updatedArray);
//same number + them selff
const addNewNum2 = (numbers) => numbers.map((num) => num + num);
const updatedArray2 = addNewNum2(numbersArray);
console.log(updatedArray2);
//number x number
const addNewNum3 = (numbers) => numbers.map((num) => num * num);
const updatedArray3 = addNewNum3(numbersArray);
console.log(updatedArray3);
//number by there power
const addNewNum4 = (numbers) => numbers.map((num) => num ** num);
const updatedArray4 = addNewNum4(numbersArray);
console.log(updatedArray4);

// sow aziz using this symbol ^ and i wanna see what can it do
//why do the ansers is zero ?
const addNewNum5 = (numbers) => numbers.map((num) => num ^ num);
const updatedArray5 = addNewNum5(numbersArray);
console.log(updatedArray5);
