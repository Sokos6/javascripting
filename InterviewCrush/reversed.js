// Simple reversal - need to work through reversing an array without reverse()
function reversed(arr) {
  return arr.reverse();
}

console.log(reversed([2, 3, 4, 5, 3, 3]));

// Manipulate strings in place
// Modify the input, need a mutable type, like array
// not an immutable string

// in place algorithm swapping elements

function reverse(arrayOfChars) {
  let leftIndex = 0;
  let rightIndex = arrayOfChars.length - 1;

  while (leftIndex < rightIndex) {
    // Swap characters
    const temp = arrayOfChars[leftIndex];
    arrayOfChars[leftIndex] = arrayOfChars[rightIndex];
    arrayOfChars[rightIndex] = temp;

    // Move towards middle
    leftIndex++;
    rightIndex--;
  }
}

console.log(reverse(['a', 'c', 'g', 'd', 'y']));
