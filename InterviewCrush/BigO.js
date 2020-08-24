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


