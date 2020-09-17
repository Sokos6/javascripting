// Binary Search lesson
// LINE BY LINE

// 1. First off we declare the function with parameters
function binarySearch(arr, target) {
  // 2. Next we define our left and right pointers and their
  // initial values. Left starts at beginning of array and
  // right starts at the end
  let left = 0;
  let right = arr.length - 1;
  // 3. Core piece of logic for the funciton - a While loop.
  // This will compare the values of the left and right pointers
  // continuing to run as long as the left is less than or
  // equal to the right.
  // Essentially this will tell the loop to run until the array
  // is broker down as small as it can be, and still can't find
  // the target value. We'll add a return value after the
  // loop for this case.
  while (left <= right) {
    // 4. Now the loop. we declare a midpoint variable and calculate
    // its value. Then add our base case which will return a value
    // and end the function if the target is found.
    // In this version of the algorithm, we're simply returning the index
    // of the target value if it has been found in the array. This return
    // value could be changed to whatever you prefer.
    let mid = Math.floor((left + right / 2));
    if(arr[mid] === target) return mid;

    // And last but certainly not least, we'll implement the if else statement
    // that checks whether the target is to the left or right of the midpoint,
    // and increments or decrements the pointers accordingly:
    if (target < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return 'Target Not Found';
}
array = [0, 2, 4, 7, 8, 10, 12];

console.log(binarySearch(array));