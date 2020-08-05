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

colors.push('White');
console.log(colors);

colors.unshift('Teal');
console.log(colors);

// Merging Arrays
// colors.concat(['Pink', 'Midnight Blue', 'Aqua']);
console.log(colors.concat(['Pink', 'Midnight Blue', 'Aqua']));

// spread operator
NewColors = [...colors, ...['red', 'orange']];
console.log(NewColors);

console.log(colors.join(' & '));

console.log(colors.slice(2, 4));

// non destructive operation. Colors still intact
console.log(colors);

// The first number in the parentheses tells us the index at which to start the splice
// The second number tells us how many items to remove from the array.
// Notice the splice() method returns the items removed from the array as a subarray.

justthis = colors.splice(1, 1, 'Gold');
console.log(colors);
console.log(justthis);

console.log(colors.reverse());

// It is alphabetical order by default for String objects. Note that this also changes the order of the array permanently.
console.log(colors.sort());

console.log([5, 9, 7].sort());

// Finding if a Value is in an Array

console.log(colors.indexOf('Teal'));

console.log(colors.includes('Teal'));
console.log(colors.includes('Black'));

// You can also add an extra parameter to indicate which index to start the search from:
console.log('Teal', 1);

// Multidimensiaonal arrays

const coordinates = [
  [1, 3],
  [4, 2],
];

console.log([0][0]);
console.log(coordinates[1][0]);

const summer = ['Jun', 'Jul', 'Aug'];
const winter = ['Dec', 'Jan', 'Feb'];
const nested = [summer, winter];
console.log(nested);
const flatten = [...summer, ...winter];
console.log(flatten);
