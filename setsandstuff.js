// Sets offer a useful way to keep track of data without having to check if any values have been duplicated.
// It's also quick and easy to check if a particular value is in a set, which can be a slow operation if an array is used.

const list = new Set();
list.add(1);

console.log(Set);
console.log(list);

list.add(2).add(3).add(4);

console.log(list);

const numbers = new Set([1, 2, 3]);

console.log(numbers);

const moreNumbers = new Set([7, 7, 7, 7, 8, 8, 8, 9, 9]);

console.log(moreNumbers);

const letters = new Set('hello');

console.log(letters);

const words = new Set().add('the').add('quick').add('brown').add('fox');

console.log(words);

const jla = new Set().add('Superman').add('Batman').add('Wonder Woman');

console.log(jla);

console.log(jla.has('Superman'));

console.log(jla.delete('Superman'));

jla.clear();

console.log(jla);

// Converting Sets to Arrays

const shoppingSet = new Set().add('Apples').add('Bananas').add('Beans');
console.log(shoppingSet);

const shoppingArray = [...shoppingSet];

console.log(shoppingArray);

// It's also possible to use the Array.from() method to convert a set into an array.
// The following code would achieve the same result as using the spread operator above:

const theShoppingSet = new Set().add('Apples').add('Bananas').add('Beans');
const theShoppingArray = Array.from(theShoppingSet);
console.log(theShoppingArray);

// Duplicate
const duplicate = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 9];
const noDuplicate = [...new Set(duplicate)];
console.log(noDuplicate);

// Weak Sets
// When objects are added to sets, they will be stored there as long as the set exists, even if the
// original reference to the object is removed. The technical term for this
// is the object is prevented from beinggarbage-collected, which can cause a
// memory leak. This can be seen in the following example:

let array = [1, 2, 3];
const strong = new Set().add(array);

array = null;
console.log(strong);

// The array still exists inside the set and we can get the original value of array back using the spread operator:
array = [...strong][0];
console.log(array);

// A memory leakoccurs when a program retains references to values
// that can no longer be accessed in its memory. This means that memory is
// being used to store values that are no longer required by the program,
// effectively wasting system resources.

// Memory leaks can cause problems by gradually reducing the overall
// memory available, which can cause the program, or even the entire system,
// to run more slowly.

// Most modern programming language, including JavaScript, employ various dynamic memory
// management techniques such asgarbage collection, which is the process of automatically
// removing items from memory that are no longer required by the program. Some languages, such as C++,
// require the programmer to manually manage memory by removing items from memory once they are finished with.

// Weak sets avoid this situation by garbage collecting any references to a 'dead object' that’s had its original reference removed.

// To create a weak set, the new operator and the WeakSet() constructor in the same way that we created a set:
const weak = new WeakSet();

// Only non-primitive data types can be added to weak sets. Trying to add primitive values will throw a type error:

// weak.add(2)
// << TypeError: Invalid value used in weak set

const arrayTwo = [1, 2, 3];
weak.add(array);
console.log(array);

console.log(weak.has(array));
weak.delete(array);

console.log(weak.has(array));














