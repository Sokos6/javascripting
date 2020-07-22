// Destructuring Arrays
// Destructuring Arrays
// The destructuring assignment syntax is a JavaScript
// expression that makes it possible to unpack values
// from arrays, or properties from objects, into distinct variables.

let [x, y] = [1, 2];
console.log(x, y);

[x, y] = [y, x];
console.log(x, y);

// Array Properties and Methods
const colors = ['red', 'green', 'blue', 'orange', 'yellow', 'purple'];

console.log(colors.length);

 console.log(colors[colors.length - 1]);

 colors.length = 8;
 console.log(colors);

 colors.length = 3;
 console.log(colors);

//  Pop, Push, Shift, and Unshift
colors.pop();
console.log(colors);

colors.shift();
console.log(colors);
