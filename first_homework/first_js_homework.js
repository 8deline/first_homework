// Section 1
// Answer 1
// Difference between var, let and const is as follows:
// The var keyword is used in pre-ES6 versions of JS.
// let is the preferred way to declare a variable when it can be reassigned,
//  and const is the preferred way to declare a variable with a constant value.

// Section 2
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kelvin';
const f = false;
console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
console.log(a < b < c);
console.log(a===a !== d);
console.log(e!=='Kevin');
console.log(48 == '48');
console.log(f!== e);

// Set a new variable g to 0
 let g = 0;
// console.log g
console.log(g);
// Then set the variable g to be equal to b + c
g = b+c;
// console.log g
console.log(g);

// Did you use const, let or var? Why did you choose the one you chose?
//What happens if you don't use const , let or var? Do you get an error? If so what does it say?
//what happens if you write 10 = g?

//Answer:

// Yes, I choose let, because the variable g is going to be reassigned. I did not get an error when I omitted let.
// When I wrote 10 = g, I was thrown this error: 10 = g;SyntaxError: Invalid left-hand side in assignment

