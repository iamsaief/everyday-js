# 🚀 Everyday JavaScript

This is a self-documentation/learning sequence I followed. It works as a javascript reference we use daily. If you are interested check it out, correct me if I am wrong.

## Table of content

1. [ 🌱 Getting started with basic JS](#-getting-started-with-basic-js)
2. [👩‍💻 Fundamental JS Concepts](#-fundamental-js-concepts)
3. [👨‍🚀 Modern JS, ES6](#-modern-js-es6)
4. [🤖 Intermediate JS](#-intermediate-js)
5. [📡 API, JSON, Data Load, GET/POST](#-api-json-data-load-getpost)

## 🌱 Getting started with basic JS

Who likes spending time on a static site? nobody, right? So to give life to a website we use JavaScripts. But to dive deep here are few things we must know.

### Variables

To store different values `var` keyword is used. for example,

```javascript
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
```

-   We can check the type of any variable with `typeof`

```javascript
console.log(typeof age, typeof name, typeof isAdult);
// Output : number string boolean

console.log(typeof number, typeof user);
// Output : object object
```

There are 6 basic data types in JavaScript which can be divided into 3 main categories:

1. _primitive_ (or primary) [*String*, *Number*, and *Boolean* are primitive data types.]
2. _composite_ (or reference) [*Object*, *Array*, and *Function* (which are all types of objects) are composite data types],
3. _special data types_. [Undefined and Null are special data types.]

[See details on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)

### Doing math

We can perform all the math operations in js. for example,

```javascript
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
```

-   Playing with numbers

```javascript
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
```

### Conditional Statements :

This is one of the core concept. We use it almost everywhere 😉. Lets see some example,

-   _if-else_ statement

```javascript
var year = 2020;
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
	console.log("Leap year! 🎉");
} else {
	console.log("Not leap year! 😟");
}
// Output: Leap year! 🎉
```

-   Conditionals with _ternary_ operator

```javascript
var age = 17;
var isAdult = age > 18 ? "Adult 🧑" : "Under 18 👶";
console.log(isAdult);
// Output: Under 18 👶
```

## 👩‍💻 Fundamental JS Concepts

To become a web developer or frontend developer we must be comfortable with Fundamental JS Concepts. Let's explore in brief.

### Array, Index, IndexOf, push, pop, length

-   Array index count from 0
-   `Array.push()` adds an element at the end
-   `Array.pop()` removes an element from the end

```javascript
/* Array.push() */
var friendsAge = [18, 20, 19, 21, 17];
console.log(friendsAge[2]);
// Output: 19

friendsAge.push(23);
console.log(friendsAge);
// Output : [18, 20, 19, 21, 17, 23]
console.log(friendsAge.length);
// Output: 6

/* Array.pop() */
friendsAge.pop();
console.log(friendsAge);
// Output : [18, 20, 19, 21, 17]

console.log(friendsAge.length);
// Output: 5
```

### Add/Remove element from the beginning and slice

-   `Array.shift()` removes an element from the beginning
-   `Array.unshift()` adds an element to the beginning
-   `Array.slice(start, endbefore)`, returns new array

```javascript
/* Array.shift() */
var animals = ["🦄", "🦓", "🐵", "🐶"];
animals.shift();
console.log(animals);
// Output: ["🦓","🐵","🐶"];

/* Array.unshift() */
animals.unshift("🦒");
console.log(animals);
// Output: ["🦒","🦓","🐵","🐶"];

/* Array.slice() */
var slicedAnimals = animals.slice(0, 3);
console.log(slicedAnimals);
// Output: ["🦒", "🦓", "🐵"];
```

### Repeating certain task until condition is fulfilled

-   _while loop_

```javascript
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
```

-   _for loop_

```javascript
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
```

-   choosing values with _switch_

```javascript
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
```

### Function, Parameter, Return

There is a saying,

> Don't Repeat Yourself aka the DRY principle.

in programming, whenever the repetition comes there we add `function`'s to make our life easier. 😉

-   Function and Function call

```javascript
function sayLoveYou() {
	console.log("I 💗 you so much");
}
sayLoveYou();
// Output: I 💗 you so much
```

-   Function parameter, multiple parameter, function return

```javascript
function greetings(name) {
	var greet = "Hello! Mr/Ms " + name + ", Good evening";
	console.log(greet);
}
greetings("Jhon");
// Output: Hello! Mr/Ms Jhon, Good evening

/* multiple parameter, return */
function sum(num1, num2) {
	var result = num1 + num2;
	return result;
}
var total = sum(15, 25);
console.log(total);
// Output: 40
```

-   Object, key value pair, get object property, set value

```javascript
var User = {
	id: 101,
	username: "jdoe",
	name: "Jhon Paul Doe",
	age: 33,
	phone: 0123456789,
};
User.phone = 9876543210; // Changing values
User["age"] = 22; // Changing values
User.city = "Berlin"; // Adding new property
console.log(User);
/* 
Output :
    {
        id: 101,
        username: 'jdoe',
        name: 'Jhon Paul Doe',
        age: 22,
        phone: 9876543210,
        city: 'Berlin'
    }

*/
```

## 👨‍🚀 Modern JS, ES6

ES6 refers to version 6 of the ECMA Script programming language. ECMA Script is the standardized name for JavaScript, and version 6 is the next version after version 5, which was released in 2011. It is a major enhancement to the JavaScript language and adds many more features intended to make large-scale software development easier.

`ECMAScript6`, or `ES6`, was published in June 2015.

-   ### _let, const_, _scope_

The `let` statement allows you to declare a variable with block scope. The `const` statement allows you to declare a constant. Both are similar except const can't be re-assigned.

```javascript
/* let, const */
let gf = "Jennifer Lawrence";
console.log(gf);
gf = "Elizabeth Olsen";
console.log(gf);

/**
 * Output :
 Jennifer Lawrence
 Elizabeth Olsen
*/

const username = "willsmith";
username = "jhonshow"; //TypeError: Assignment to constant variable.

const number = [1, 2, 3, 4, 5];
number[1] = 10;
number.push(6);
console.log(number);
// Output: [ 1, 10, 3, 4, 5, 6 ]

const user = { name: "Shakib", age: 30 };
user.name = "Mushfiq";
user.profession = "Cricker";
console.log(user);
// Output: { name: 'Mushfiq', age: 30, profession: 'Cricker' }

/* Block Scope */
let sum = 0;
for (let i = 0; i < 5; i++) {
	sum += i;
}
console.log(sum); // 10
console.log(i);
//ReferenceError: i is not defined
```

-   ### array/object destructuring, spread operator

Magical the 3 dots (`...`) will spread out what value you want. 😉

```javascript
/* 3 dots: spread */
const red = ["🧡"];
const green = ["💚"];
const blue = ["💙"];
const rgbHeart = [...red, ...green, ...blue];
console.log(rgbHeart);
// Output : ["🧡", "💚", "💙"]

/* destructure: array */
const hearts = ["🧡", "💚", "💙", "💛", "💜", "🖤", "🤍"];
const [r, g, b] = [...hearts];
console.log(r, g, b);
// Output : 🧡 💚 💙

/* destructure: object */
const userInfo = {
	id: 101,
	username: "jdoe",
	name: "Jhon Paul Doe",
	age: 33,
	phone: "0123456789",
};
const { name, phone } = { ...userInfo };
console.log(name, phone);
// Output: Jhon Paul Doe 0123456789

/* Finding min/max */
const numArr = [200, 300, 400, 500, 600];
const min = Math.min(...numArr);
const max = Math.max(...numArr);
console.log(min, max);
// Output: 200 600
```

-   ### Default parameter, template string, backtick - ` `` `

In some cases, we need predefined values to work with. Here comes, in function, we can set some default values `num=10` to a parameter. If that parameter isn't passed then it'll take the default one, otherwise overwrite it.

Backtick comes handy when string formatting is done, we can use variables inside and don't worry to concatenate string, like `` `Hello! ${name}` ``

```javascript
/* Default Parameter */
function addFifty(num1, num2 = 50) {
	return num1 + num2;
}
const result = addFifty(10, 20);
const result2 = addFifty(20);
console.log(result, result2);
// Output : 30 70

/* Template string */
function greetings(name) {
	const greet = `Hello! Mr/Ms ${name}, Good evening`;
	console.log(greet);
}
greetings("Jenny");
// Output: Hello! Mr/Ms Jenny, Good evening
```

-   ### Mighty arrow function `()=>{}`

Functions are everywhere in js, and to name them is hard. But now in `ES6`, we can create an anonymous function like this `()=>{}`. We won't have to use the `return` statement when there is only one statement in the function's body, this is known as `implicit return`.

```javascript
/* Arrow functions - implicit return*/
const doubleIt = (num) => num * 2;
console.log(doubleIt(4));
// Output: 8

const add = (a, b) => a + b;
console.log(add(40, 50));
// Output: 90

/* explicit return */
const sumTimesDifference = (x, y) => {
	const sum = x + y;
	const diff = x - y;
	return sum * diff;
};
console.log(sumTimesDifference(20, 10));
// Output: 300
```

-   ### Class, Constructor, Object

Classes are a template for creating objects. They encapsulate data with code to work on that data

Use the keyword `class` to create a class, and always add the `constructor()` method. The constructor method is called each time the class object is initialized.

NB: Variables in class is called `property` and functions are called `method`

[Click here, for more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

```javascript
/* class, constructor, object */
class Student {
	constructor(name, id) {
		this.name = name;
		this.id = id;
		this.university = "Harvard University";
	}
}

const student1 = new Student("Tom Hardy", 101);
const student2 = new Student("Chris Hemsworth", 102);

console.log(student1, student2);
console.log(student1.name, student2.name);
/**
 * Output :
    Student {
        name: 'Tom Hardy',
        id: 101,
        university: 'Harvard University'
    } Student {
        name: 'Chris Hemsworth',
        id: 102,
        university: 'Harvard University'
    }
 */
// Output: Tom Hardy Chris Hemsworth
```

-   ### inheritance, extends, super()

```javascript
/* inheritance, extends, super */
class Parent {
	constructor() {
		this.fatherName = "Christopher Nolan";
		this.motherName = "Emma Thomas";
	}
}
class Child extends Parent {
	constructor(name, age) {
		super();
		this.name = name;
		this.age = age;
	}
	getFamily() {
		return `Name: ${this.name}, Father: ${this.fatherName}, Mother: ${this.motherName}`;
	}
}

const kid1 = new Child("Flora Nolan", 18);
const kid2 = new Child("Magnus Nolan", 12);
console.log(kid1.name); // Output : Flora Nolan
console.log(kid2.age); // Output : 12
console.log(kid1.getFamily()); // Output: Name: Flora Nolan, Father: Christopher Nolan, Mother: Emma Thomas
```

## 🤖 Intermediate JS

JavaScript can be tricky in some cases. Let's find out some of them we have to encounter every day.

-   ### Truthy/Falsy value

Any number except 0 is true. If the value of any variable is 0 will return false. Similarly, we get a falsy result when `undefined`, `null`, `NaN`, `false` is the return value.

| truthy            | falsy     |
| ----------------- | --------- |
| 1                 | 0         |
| true              | false     |
| non 0 value       | undefined |
| " " or "anything" | null, ""  |
| any numbers       | NaN       |
| {}, []            | -         |

```javascript
/* Truthy/Falsy value */
let age = 0;
if (age) {
	console.log(true);
} else {
	console.log(false);
}
// Output : false

let name; // undefined, falsy
// name = "Smith"; // truthy
// name = " "; //truthy
// name = []; //truthy
// name = {}; //truthy
console.log(name);

if (name) {
	console.log(true);
} else {
	console.log(false);
}
// Output : false
```

-   ### Null vs Undefined

    There are several ways we get Null/Undefined, for example.

    1. Unassigned variable
    2. No return value/ nothing after return
    3. Passing incorrect parameter
    4. Accessing non-existing index/property
    5. Explicitly assign null/undefined

```javascript
/* unassigned variable */
let name;
console.log(name);
// Output: undefined

/* No return/ nothing after return */
function add(num1, num2) {
	result = num1 + num2;
	return;
}
result = add(10, 30);
console.log(result);
// Output: undefined

/* passing incorrect parameter */
function add(num1, num2) {
	console.log(num1, num2);
}
result = add();
// Output: undefined

/* passing incorrect parameter */
function add(num1, num2) {
	console.log(num1 + num2);
}
result = add();
// Output: NaN;

/* Accessing non-existing index/property */
const userData = {
	name: "Jhon Doe",
	phone: "123263",
};
console.log(userData.id);
// Output: undefined

userData.address = undefined;
console.log(userData.address);
// Output: undefined
```

-   ### == vs ===, implicit conversion

    Both represent logical equality but here is the mighty difference-

    -   == checks values only, it tries to compare by implicit type conversion
    -   === checks both values and types

```javascript
/* 👎 double equal == */
const first = 1;
const second = "1";
if (first == second) {
	console.log(true, `${first} == ${second}`);
} else {
	console.log(false, `${first} != ${second}`);
}
// Output : true 1 == 1

/* 👍triple equal === */
const first = 1;
const second = "1";
if (first === second) {
	console.log(true, `${first} == ${second}`);
} else {
	console.log(false, `${first} != ${second}`);
}
// Output : false 1 != 1

/* 🤔 implicit type conversion, double equal ==  */
const first = 1;
const second = true;
if (first == second) {
	console.log(true, `${first} == ${second}`);
} else {
	console.log(false, `${first} != ${second}`);
}
// Output : true 1 == true 😮
```

-   ### map(), filter(), find()

    One of the reasons why `ES6` is so useful, it makes your life a lot easy. Let's write a modern `for` loop.

    -   `map()` - runs through all the elements, returns a new array
    -   `filter()` - runs through all the elements, returns only those who fulfill the condition to a new array.
    -   `find()` - runs through all the elements, returns only the element who fulfills the condition.

```javascript
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
```

-   ### global/block scope, accessing outer scope variables, hoisting

    -   `let`, `const` doesn't go outside block/function scope, but
    -   variables with `var` get hoisted, means that it takes the declaration outside of the scope, thus it can be accessed from the outer scope.

```javascript
/* global/block scope */
let result = 10;
function sum(x, y) {
	let result = x + y;
	console.log(result); // 35
	if (result > 10) {
		var msg = "more than 10";
		console.log(msg);
	}
	console.log(msg); // outside scope, because of hoisting
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
```

-   ### slice(), splice(), join()
    -   `slice()` - takes starting index and before-end index, returns new array
    -   `splice()` - takes starting index, item number (how many to remove), item number (how many to add, optional),, mutates original array.
    -   `join()` - It takes an array and join the item to a string

```javascript
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
```

-   ### ~~closure, encapsulation, private variable~~
    -   comming soon ....

## 📡 API, JSON, Data Load, GET/POST

To take your development skills further lets paly with `data` from a server or any 3rd party `API`. Earlier we had to use complex `XMLHttpRequest API`, now modern `Fetch API` does the same, and its easier to understand.

[for more, click here](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

### Fetch API, Data Load, GET/POST

```html
<h1>Fetch API</h1>
<div class="dataUI"></div>
<script>
	/* Fetch API */
	const dataUI = document.querySelector(".dataUI");
	apiCall1("http://www.boredapi.com/api/activity/");

	function apiCall1(api) {
		fetch(api)
			.then((res) => res.json())
			.then((data) => {
				dataUI.innerHTML += `
				<h4>
					Data Loaded from <em>"${api}"</em>
				</h4>
				Activity: ${data.activity}, <br>
				Type: ${data.type}, <br> 
				Link: ${data.link}, <br> 
				Price : ${data.price}
			`;
			});
	}
</script>
```

### JSON

JavaScript Object Notation (`JSON`) is a standard text-based format for representing structured data based on JavaScript object syntax. You can include the same basic data types inside JSON as you can in a standard JavaScript object — strings, numbers, arrays, booleans, and other object literals. This allows you to construct a data hierarchy.

It is commonly used for transmitting data in web applications (e.g., sending some data from the server to the client, so it can be displayed on a web page, or vice versa).

JSON exists as a string. It needs to be converted to a native JavaScript object when you want to access the data.

```javascript
/* Data as JSON */
const data = `
{
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }
`;
```

JavaScript provides a global `JSON object` that has methods available for converting between the two.

-   `JSON.parse()`: Accepts a JSON `string` as a parameter, and returns the corresponding JavaScript `object`.
-   `JSON.stringify()`: It does the opposite.

```javascript
/* JSON to/from Object*/
const obj = JSON.parse(data);
const json = JSON.stringify(obj);

console.log(obj);

/* Output:
{
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
  address: {
    street: 'Kulas Light',
    suite: 'Apt. 556',
    city: 'Gwenborough',
    zipcode: '92998-3874',
    geo: {
      lat: '-37.3159',
      lng: '81.1496'
    }
  },
  phone: '1-770-736-8031 x56442',
  website: 'hildegard.org',
  company: {
    name: 'Romaguera-Crona',
    catchPhrase: 'Multi-layered client-server neural-net',
    bs: 'harness real-time e-markets'
  }
}
*/

console.log(json);

/* Output:
{"id":1,"name":"Leanne Graham","username":"Bret","email":"Sincere@april.biz","address":{"street":"Kulas Light","suite":"Apt. 556","city":"Gwenborough","zipcode":"92998-3874","geo":{"lat":"-37.3159","lng":"81.1496"}},"phone":"1-770-736-8031 x56442","website":"hildegard.org","company":{"name":"Romaguera-Crona","catchPhrase":"Multi-layered client-server neural-net","bs":"harness real-time e-markets"}}
*/
```

Thank you so mush for your time to follow along. If you smell somethings wrong, please do let me know. If you liked it give it a star.

Have fun, cheers! 🍻
