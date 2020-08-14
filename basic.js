/* Variables */
var age = 35;
console.log(age);
// Output: 35

var name = "Mashrafee Bin Mortoza";
console.log(name);
// Output: Mashrafee Bin Mortoza

var isAdult = true;
console.log(isAdult);
// Output: true

var number = [1, 2, 3, 4, 5];
var user = { name: "Shakib", age: 30 };
/* We can check the type of any variable with typeof */
console.log(typeof age, typeof name, typeof isAdult);
// Output : number string boolean

console.log(typeof number, typeof user);
// Output : object object

/* Math related stuff : */

var num1 = 22;
var num2 = 7;
var result = num1 / num2;
console.log(result);
// output: 3.142857142857143

var fixed = result.toFixed(2);
console.log(fixed);
// output: 3.14

var resultInt = parseInt(result);
console.log(resultInt);
// output: 3

/* Playing with numbers */
var resultFloor = Math.floor(result);
console.log(resultFloor);
// output: 3

var resultRound = Math.round(result);
console.log(resultRound);
// output: 3

var resultCeil = Math.ceil(result);
console.log(resultCeil);
// output: 4

var randomNum = Math.random();
console.log(randomNum);
// Output: a random number between 0 and 1.

/* Conditional Statements : */

/* if-else statement */
var year = 2020;
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
	console.log("Leap year! 🎉");
} else {
	console.log("Not leap year! 😟");
}

// Output: Leap year! 🎉

/* Conditionals with ternary operator */
var age = 17;
var isAdult = age > 18 ? "Adult 🧑" : "Under 18 👶";
console.log(isAdult);
// Output: Under 18 👶
