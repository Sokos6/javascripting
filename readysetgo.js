// Sets - A set is a data structure that represents a
// collection of unique values, so it cannot include
// any duplicate values.
// Sets offer a useful way to keep track of data without having to check
// if any values have been duplicated. It's also quick
// and easy to check if a particular value is in a set, which can
// be a slow operation if an array is used.

// Sets give JavaScript developers a new way to represent data. While Arrays
// remain the general-purpose workhorse of JavaScript applications, Sets are
// intended to represent a unique collection of values.
// Converting between Sets and Arrays is easy. You can use a Set to ensure your
// data remains unique and then convert it to an Array to take advantage
// of functional methods like map, filter, and reduce.
// Sets use strict equality to compare values and determine what is unique.
// Since JavaScript compares objects by reference, Arrays and object literals
// can be considered unique even when they contain the same contents.

// Sets give a convenient way of eliminating any duplicate values from an array in a single operation.

// A good example of something that could be represented as a
// Set would be the courses that a college student takes in a single semester.
// They can take one or more courses, but they can’t take the same course more
// than once in a semester.

const courses = new Set(['English', 'Science', 'Lego Robotics']);

// On the other hand, a collection of Pokemon cards would not be a good use case
// for a Set because it could contain duplicates. In this case, an Array would
// be a better way to represent the data.
const cards = ['Machop', 'Diglett', 'Charmeleon', 'Machop', 'Squirtle'];
console.log(cards);

// Duplicates can be passed into a Set, but they won’t be preserved

const duplicatePokemon = new Set([
  'Machop',
  'Diglett',
  'Charmeleon',
  'Machop',
  'Squirtle',
]);
console.log(duplicatePokemon);

const list = new Set();
list.add(1);
console.log(list);

list.add(2).add(3).add(4);
console.log(list);

//ignored
list.add(1);
console.log(list);

// How Can This Be Used?
// Imagine that you are developing a blog and want to create a feature that
// allows visitors to search for posts that match one or more categories. Each
// category should only be applied once.
// If you are using an Array to represent the list of active categories, you
// need to take care to avoid duplicates. This could be done by checking that
// the list does not already contain the category being added.
// The indexOf or includes methods could be used to do this:
// If our list does not include the category

let category = [];
// if (!list.includes(category)) {
//   // Then add the new category to the list
//   list.push(category);
// }

// Sets can be used to handle this problem automatically.
// You can simply use the add method and the Set will always remain unique.
// Just add the category to the list
// No need to perform any checks in advance!
list.add(category);

// Converting a Set Back to an Array
// We already saw that an Array can be converted to a Set by passing the Array
// into the Set’s constructor, but how can a Set be converted to an Array?
// One option is to call the Array from method statically:
const set = new Set(['Casablanca', 'The Wizard of Oz', 'Jaws']);
const arr = Array.from(set);
console.log(arr);
// (3) ["Casablanca", "The Wizard of Oz", "Jaws"]
// The ES6 spread operator is another option:
const set1 = new Set(['Casablanca', 'The Wizard of Oz', 'Jaws']);
const arr2 = [...set1];
console.log(arr2);
// (3) ["Casablanca", "The Wizard of Oz", "Jaws"]
// Sets do not support functional programming methods like map, filter, and reduce
// so it’s often convenient to convert them to Arrays for processing.

const letters = new Set('hello');
console.log(letters);

const words = new Set()
  .add('the')
  .add('quick')
  .add('and')
  .add('the')
  .add('mighty');

console.log(words);

// All non-primitive values, such as arrays and objects, are considered
// unique values, even if they contain the same values. On the face of
// it, this appears to allow duplicate values appear in a set:

const arrays = new Set().add([1]).add([1]);
console.log(arrays);
console.log([1] === [1]);

// Type coercion is not used when values are added to a set, so the string '2'
// will be added as a new entry, even if the number 2 is already an element of the set:

const mixedTypes = new Set().add(2).add('2');

console.log(mixedTypes);


// Set Methods
const jla = new Set().add('Superman').add('Batman').add('Wonder Woman');
console.log(jla.size);