// a tool we use for talking about how much time an algorithm takes to run or how much space a data structure takes up in RAM. It's pretty simple:

// O(1)O(1) or constant means the time or space stays about the same even as the dataset gets bigger and bigger.

// O(n)O(n) or linear means the time or space grows proportionally as the dataset grows.

// So O(1)O(1) space is much smaller than O(n)O(n) space. And O(1)O(1) time is much faster than O(n)O(n) time.



// This function funs in O(1) time, or 'constant time' relative to it's input
// The input array could be 1 item of 1000 items, this function would
// still just require one 'step'

function printFirstItem(items) {
  console.log(items[0]);
}

// This function runs in O(n) time, or 'linear time', when n is the number of items in the arrray
// If the array has 10 items, we have to print 10 times. If it has 1000, we print 1000 times
function printAllItems(items) {
  items.forEach((item) => {
    console.log(item);
  });
}

console.log(printAllItems([10, 12, 23, 42, 52]));

// Here we're nesting two loops. If our array has n items, our outer loop runs n times, and our inner loop runs
// n times for each iteration of the outer loop, giving us n₂ total prints. Thus this function
// runs in O(n₂) time, or 'quadratic time'. If the array has 10 items, we have to print 100 times.
// If it has 1000 items, we have to print 1000000 times.
function printAllPossibleOrderedPairs(items) {
  items.forEach((firstItem) => {
    items.forEach((secondItem) => {
      console.log(firstItem, secondItem);
    });
  });
}

// N could be the actual input, or size of the input
// Both these functions have O(n) runtime, even though one takes an integer as its input and the other
// takes and array.
function sayHiNTimes(n) {
  for (let i = 0; i < n; i++) {
    console.log('hi');
  }
}

console.log(sayHiNTimes(23));

function printAllItems(items) {
  items.forEach((item) => {
    console.log(item);
  });
}

// So sometimes n is an actual number that's an input to our function,
// and other times n is the number of items an input array (or an input map or an input object, ect)

//DROP THE CONSTANTS

// When you're calculating the big O complexity of something, you just throw out the constants
//This is O(2n), which we just call O(n)
function printAllItemsTwice(items) {
  items.forEach((item) => {
    console.log(item);
  });

  items.forEach((item) => {
    console.log(item);
  });
}

function printFirstItemThenFirstHalfThenSayHi100Times(items) {}

// this is O(1 + n/2 + 100) which iwe just call O(n)
// Remember for Big O notation, we're looking at what happens as n gets arbitrarily large. A n get really big
// add ing by 100 or dividing by 2 has a decreasingly significant affect.
function printFirstItemThenFirstHalfThenSayHi100Times(items) {
  console.log(items[0]);

  const middleIndex = Math.floor(items.length / 2);
  let index = 0;

  while (index < middleIndex) {
    console.log(items[index]);
    index++;
  }

  for (let i = 0; i < 100; i++) {
    console.log('hi');
  }
}

// DROP THE LESS SIGNIFICANT TERMS

// Here our runtime is O(n + n₂) Even if it was O(n₂/2+100n) it would still be O(n₂)
//Divide by 2 or add 100 isn't going to be a big deal if we do something 1000000000 times
function printAllNumbersThenAllPairSums(numbers) {
  console.log('these are the numbers');
  numbers.forEach((number) => {
    console.log(number);
  });

  console.log('and these are their sums:');
  numbers.foreEach((secondNumber) => {
    console.log(firstNumber + secondNumber);
  });
}

// We're usually talking about the WORST CASE
// Often this WORST CASE stipulation is implied. Can impress interviewer
// by expressing it explicitly

// Some time the WORST CASE runtime is significantly worse than the best case runtime.

// Here we might have 100 items in our haystack, but the first item might be the needle...in wich case
// we would return in just 1 iteration of our loop

// in general we would say this is O(n) runtime as the WORST CASE
// Best case would be O(1). or some algorithms we can also make rigorous statements about the "average case" runtime.
function contains(haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle) {
      return true;
    }
  }
  return false;
}

// Space complexity is
// Sometimes we want to optimize for using less memory instaed of using less time.
// Memory cost (or SPACE COMPLEXITY) is very similar to talking about time cost of
// We simply look at the total size(relative to the size of the input) of any new variables we're allocating

// This function take O(1) space (we use a fixed number of variables)
function sayHiNTimes(n) {
  for (let i = 0; i < n; i++) {
    console.log('hi');
  }
}

// This function takes O(n) space (the size of hiArray sacles with the size of the input)
function arrayOfHiNTimes(n) {
  const hiArray = [];
  for (let i = 0; i < n; i++) {
    hiArary[i] = 'hi';
  }
  return hiArray;
}

// Usually when we talk about space complexity, we're talking about additional space
// so we don't include space taken by the inputs
// This function takes constant space even though the input has n items
function getLargestItem(items) {
  let largest = -Number.MAX_VALUE;
  items.forEach((item) => {
    if (item > largest) {
      largest = item;
    }
  });
  return largest;
}

// Sometimes there is a tradeoff between saving time and saving space. You have to decide which one you're optimizng for
// Big O analysis is awesome except when it's not
// You should make a habit of thinking about the time and space complexity of algorithms as you design
// them. Before long this'll become second nature, allowing you to see optimizations and potential performance issues right away.

// Asymptotic analysis is a powerful tool, but wield it wisely.

// Big O ignores constants, but sometimes the constants matter. If we have a script that takes 5 hours
// to run, an optimization that divides the runtime by 5 might not affect big O, but it still saves you 4 hours of waiting.

// Beware of premature optimization. Sometimes optimizing time or space negatively impacts readability
// or coding time. For a young startup it might be more important to write code that's easy to ship quickly or
// easy to understand later, even if this means it's less time and space efficient than it could be.

// But that doesn't mean startups don't care about big O analysis. A great engineer (startup or otherwise)
// knows how to strike the right balance between runtime, space, implementation time, maintainability, and readability.

// You should develop the skill to see time and space optimizations, as well as the wisdom to judge if those optimizations are worthwhile.
