// + addition
// - subtraction
// * multiplication
// / division
// % modulus
// ++ increment
// -- decrement

var x = 6;
var y = 2;

x += y; // adds y to the x variable
console.log(x);

x-= y; // takes y away from x
console.log(x);

x *= y; // times x by y and assigns it to x
console.log(x);

x /= y; // divides x by y (12 by 2))
console.log(x);

x %= y; // provides the remainder of 6 / 2 (0)
console.log(x);

text1 = "what a very ";
text2 = "nice day!";
text1 += text2;
console.log(text1); // addition with strings

// These are connectors:

console.log(5 == 5 && 10 == 9);

console.log(5 == 5 || 10 == 9); // this is true because were using 'or'

// this is the type of operator, it gives you the type of a variable

console.log(typeof(x)); // it returns number as x is assigned to a number