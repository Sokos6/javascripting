const romanNumerals = new Map();

romanNumerals.set(1, 'I');
romanNumerals.set(2,'II').set(3,'III').set(4,'IV').set(5,'V');

console.log(romanNumerals.get(4));

console.log(romanNumerals.has(5));

const heroes = new Map([ ['Clark Kent','Superman'],
['Bruce Wayne', 'Batman']
]);

console.log(heroes.size);

heroes.delete('Clark Kent');
console.log(heroes.size);

heroes.clear();

console.log(heroes.size);

[...romanNumerals];

Array.from(romanNumerals);


console.log(romanNumerals);

// Weak Maps
// Weak mapswork in the same way as weak sets. They are the same as maps, except their
// keys cannot be primitives, and the garbage collector will automatically remove
// any dead entries when the reference to the original object is deleted.

// To create a weak map, the new operator is used along with the WeakMap() constructor:

// const weak = new WeakMap();
// Weak maps can use the has() , get() , set() and delete() methods in the same way as a regular map.

// Weak maps and sets are useful for optimizing memory usage and avoiding memory leaks, but they’re
// also limited in that they don't have access to all the methods their regular counterparts have.
// For example, you cannot use the size() method to see how many entries they contain.
// The choice of which to use will depend on what you plan to use them for.
