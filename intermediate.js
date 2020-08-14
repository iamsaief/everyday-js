/* Truthy/Falsy value */
let age = 0;
if (age) {
	console.log(true);
} else {
	console.log(false);
}
// Output : false

let name; // undefined, falsy
name = "Smith"; // truthy
name = " "; //truthy
name = []; //truthy
name = {}; //truthy
console.log(name);

if (name) {
	console.log(true);
} else {
	console.log(false);
}
// Output : false

/* unassigned variable */
let name;
console.log(name);
Output: undefined;

/* No return/ nothing after return */
function add(num1, num2) {
	result = num1 + num2;
	return;
}
result = add(10, 30);
console.log(result);
Oputput: undefined;

/* passing incorrect parameter */
function add(num1, num2) {
	console.log(num1 + num2);
}
result = add();
// Oputput: NaN;

/* Accessing non-exist index/property */
const userData = { name: "Jhon Doe", phone: "123263" };
console.log(userData.id);
// Oputput: undefined

userData.address = undefined;
console.log(userData.address);
// Oputput: undefined

/* double equal == */
const first = 1;
const second = "1";
if (first == second) {
	console.log(true, `${first} == ${second}`);
} else {
	console.log(false, `${first} != ${second}`);
}
// Output : true 1 == 1

/* triple equal === */
const first = 1;
const second = "1";
if (first === second) {
	console.log(true, `${first} == ${second}`);
} else {
	console.log(false, `${first} != ${second}`);
}
// Output : false 1 != 1

/* implicit type conversion, double equal ==  */
const first = 1;
const second = true;
if (first == second) {
	console.log(true, `${first} == ${second}`);
} else {
	console.log(false, `${first} != ${second}`);
}
// Output : true 1 == true

/* Map */
const numbers = [2, 3, 4, 5, 6, 8];
const squaredNum = numbers.map((num) => num * num);
console.log(squaredNum);
// Output : [ 4, 9, 16, 25, 36, 64 ]

/* Filter */
const shapes = ["🟨", "🟩", "🔵", "🔴", "🟨", "🟩", "🔵", "🔴"];
const circle = shapes.filter((item) => item === "🔴");
const square = shapes.filter((item) => item === "🟩");
console.log(circle);
console.log(square);
// Output : ["🔴", "🔴"]
// Output : ["🟩", "🟩"]

/* Find */
const hearts = ["💙", "💛", "🧡", "💚", "💜"];
const greenH = hearts.find((item) => item === "💚");
console.log(greenH);
// Output : 💚

/* global/block scope */
let result = 10;
function sum(x, y) {
	let result = x + y;
	console.log(result); // 35
	if (result > 10) {
		var msg = "more than 10";
		console.log(msg);
	}
	console.log(msg); // show outside scope, var is hoisting
}
sum(15, 20);
console.log(result); // 10
/**
 * Output:
    35
    more than 10
    more than 10
    10
 */

/* slice(), splice(), join() */
const sports = ["⚽️", "🏀", "🏈", "🏓", "🏸", "🏏", "🏐", "🎱"];
const part = sports.slice(3, 6);
console.log(part);
// Output: ["🏓", "🏸", "🏏"]

const removed = sports.splice(2, 6, "🎭", "🤹");
console.log(removed);
console.log(sports);
/* 
  Output:
  ["🏈", "🏓", "🏸", "🏏", "🏐", "🎱"]
  ["⚽️", "🏀","🎭", "🤹"]
*/

const together = sports.join(",");
console.log(together);
// Output: "⚽️,🏀"
