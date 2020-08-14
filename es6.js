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
// username = "jhonshow"; //TypeError: Assignment to constant variable.

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
// console.log(i); //ReferenceError: i is not

/* array/object destructuring, spread operator */
const red = ["🧡"];
const green = ["💚"];
const blue = ["💙"];
const rgbHeart = [...red, ...green, ...blue];
console.log(rgbHeart);
// Output : ["🧡", "💚", "💙"]

/* destructure */
const hearts = ["🧡", "💚", "💙", "💛", "💜", "🖤", "🤍"];
const [r, g, b] = [...hearts];
console.log(r, g, b);
// Output : 🧡 💚 💙

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

const numArr = [200, 300, 400, 500, 600];
const min = Math.min(...numArr);
const max = Math.max(...numArr);
console.log(min, max);
// Output: 200 600

/* function's default parameter, template string */
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

/* Arrow functions */
const doubleIt = (num) => num * 2;
console.log(doubleIt(4));
// Output: 8

const add = (a, b) => a + b;
console.log(add(40, 50));
// Output: 90

const sumTimesDifference = (x, y) => {
	const sum = x + y;
	const diff = x - y;
	return sum * diff;
};
console.log(sumTimesDifference(20, 10));
// Output: 300

/* class, constructor, obeject */
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
 * Output 1:
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
// Output 2: Tom Hardy Chris Hemsworth

/* inheritence, extends, super */
class Parent {
	constructor() {
		this.fatherName = "Christopher Nolan";
		this.motherName = "Emma Thomas";
	}
}
class Chlid extends Parent {
	constructor(name, age) {
		super();
		this.name = name;
		this.age = age;
	}
	getFamily() {
		return `Name: ${this.name}, Father: ${this.fatherName}, Mother: ${this.motherName}`;
	}
}

const kid1 = new Chlid("Flora Nolan", 18);
const kid2 = new Chlid("Magnus Nolan", 12);
console.log(kid1.name); // Output : Christopher Nolan
console.log(kid2.age); // Output : Emma Thomas
console.log(kid1.getFamily()); // Output: Name: Flora Nolan, Father: Christopher Nolan, Mother: Emma Thomas
