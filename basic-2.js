/**
 * Array index count from 0
 * Array.push() adds an element at the end
 * Array.pop() removes an element from the end
 */

var friendsAge = [18, 20, 19, 21, 17];
console.log(friendsAge[2]);
// Output: 19

friendsAge.push(23);
console.log(friendsAge);
// Output : [18, 20, 19, 21, 17, 23]
console.log(friendsAge.length);
// Output: 6

friendsAge.pop();
console.log(friendsAge);
// Output : [18, 20, 19, 21, 17]

console.log(friendsAge.length);
// Output: 5

/**
 * Array.shift() removes an element from the beginning
 * Array.unshift() adds an element to the beginning
 * Array.slice(start, endbefore), returns new array
 */
var animals = ["🦄", "🦓", "🐵", "🐶"];
animals.shift();
console.log(animals);
// Output: ["🦓","🐵","🐶"];

animals.unshift("🦒");
console.log(animals);
// Output: ["🦒","🦓","🐵","🐶"];

var slicedAnimals = animals.slice(0, 3);
console.log(slicedAnimals);
// Output: ["🦒", "🦓", "🐵"];

/* while loop */
var num = 0;
while (num <= 5) {
	console.log(num);
	num++;
}
/*  
Output:
    0
    1
    2
    3
    4
    5 
*/

/* for loop */
for (var i = 0; i <= 5; i++) {
	console.log(i);
}
/*
Output:
    0
    1
    2
    3
    4
    5
*/

var menus = ["🍕", "🍔", "🍟", "🌭", "🥪", "🌮", "🍩"];
for (var i = 0; i < menus.length; i++) {
	item = menus[i];
	console.log(item);
}
/*
Output:
    🍕
    🍔
    🍟
    🌭
    🥪
    🌮
    🍩

*/

/* Choosing values with switch */
var i = 3;
switch (i) {
	case 0:
		console.log("i is zero.");
		break;
	case 1:
		console.log("i is one.");
		break;
	case 2:
		console.log("i is two.");
		break;
	default:
		console.log("i is greater than 2.");
}
// Output: i is greater than 2.

/* Function and Function call */
function sayLoveYou() {
	console.log("I 💗 you so much");
}
sayLoveYou();
// Output: I 💗 you so much

/* Function parameter, multiple parameter, function return */
function greetings(name) {
	var greet = "Hello! Mr/Ms " + name + ", Good evening";
	console.log(greet);
}
greetings("Jhon");
// Output: Hello! Mr/Ms Jhon, Good evening

/* Multiple parameter, Return */
function sum(num1, num2) {
	var result = num1 + num2;
	return result;
}
var total = sum(15, 25);
console.log(total);
// Output: 40

/* Object, key value pair, get object property, set value */
var User = {
	id: 101,
	username: "jdoe",
	name: "Jhon Paul Doe",
	age: 33,
	phone: "0123456789",
};
User.phone = "9876543210"; // Changing values
User["age"] = 22; // Changing values
User.city = "Berlin"; // Adding new propery
console.log(User);
/* 
Output :
    {
        id: 101,
        username: 'jdoe',
        name: 'Jhon Paul Doe',
        age: 22,
        phone: '9876543210',
        city: 'Berlin'
    }

*/
