// The iterator pattern has been around for decades, and suggests a
// "standardized" approach to consuming data from a source one chunk
// at a time. The idea is that it's more common and helpful to iterate
// the data source—to progressively handle the collection of data by
// processing the first part, then the next, and so on, rather than handling
// the entire set all at once.

// Consuming Iterators
// With the ES6 iteration protocol in place, it's workable to consume a data
// source one value at a time, checking after each next() call for done to be
// true to stop the iteration. But this approach is rather manual, so ES6 also
// included several mechanisms (syntax and APIs) for standardized consumption
// of these iterators.

// One such mechanism is the for..of loop:

let it = [1 ,3, 4, 5, 6, 7, 9];

for (let val of it) {
  console.log(`Iterator value: ${ val }`);
}

var vals =  it;
console.log(vals)

// NOTE:
// We'll omit the manual loop equivalent here, but it's definitely less
// readable than the for..of loop!

// Another mechanism that's often used for consuming iterators is the ... operator.
// This operator actually has two symmetrical forms: spread and rest (or gather, as I prefer).
// The spread form is an iterator-consumer.

// To spread an iterator, you have to have something to spread it into. There are two
// possibilities in JS: an array or an argument list for a function call.

// An array spread:
// spread an iterator into an array,
// with each iterated value occupying
// an array element position.
var vals = [ ...it ];
// A function call spread:

// spread an iterator into a function,
// call with each iterated value
// occupying an argument position.
doSomethingUseful( ...it );

// In both cases, the iterator-spread form of ... follows the iterator-consumption protocol
// (the same as the for..of loop) to retrieve all available values from an iterator and place
// (aka, spread) them into the receiving context (array, argument list).

