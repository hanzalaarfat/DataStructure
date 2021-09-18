/* Stand in LinePassed
In Computer Science a queue is an abstract Data Structure where items are kept in order. New items can be added at the back of the queue and old items are taken off from the front of the queue.

Write a function nextInLine which takes an array (arr) and a number (item) as arguments.

Add the number to the end of the array, then remove the first element of the array.

The nextInLine function should then return the element that was removed. */

/// out put

/* nextInLine([], 5) should return a number.

nextInLine([], 1) should return 1

nextInLine([2], 1) should return 2

nextInLine([5,6,7,8,9], 1) should return 5

After nextInLine(testArr, 10), testArr[4] should be 10 */

function nextInLine(arr, item) {
  // Only change code below this line
  if (arr.length == 0) {
    return item;
  }
  arr.push(item);
  item = arr.shift();

  return item;
  // Only change code above this line
}

// Setup
var testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
