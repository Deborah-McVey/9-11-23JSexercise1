/* Exercise #1
Objective: Understand the "this" keyword in different contexts.

Instructions:

Create three functions: one global, one as an object method, and an arrow function inside an object.
Print the value of this inside each function.
Discuss or note down the differences you observe in the value of this across the three scenarios. */

// global
function GlobalThing {

console.log("'this' in Global Scope:", this);
}

// object method

function Object1(name) {
	this.name = name;
}

const whatever = new Object1('Yeah!');
console.log("'this' in Constructor Scope:", whatever.name);

// arrow function inside an object

const shops = {
	name: 'Your Logo',
	location: ['Missouri', 'Florida', 'New York'],
	printShops: function () {
		console.log(this.printShops(), this.location);
	},
	printShops1: () => console.log(this.printShops1, this.location), 
};

shops.printShops();
shops.printShops1();