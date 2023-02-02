// given an array of sorted integers return the sorted squared array
// initial array can not be modified

array = [-11, -5, 1, 3, 8, 11];

console.log(sortedSquaredArray(array));

// time complexity O(n) | space complexity O(n)
function sortedSquaredArray(array) {
  sortedSquares = Array(array.length);

  leftPointer = 0;
  rightPointer = array.length - 1;

  for (i = sortedSquares.length - 1; i >= 0; i--) {
    if (Math.abs(array[leftPointer]) <= Math.abs(array[rightPointer])) {
      sortedSquares[i] = array[rightPointer] * array[rightPointer];
      rightPointer--;
    } else if (Math.abs(array[leftPointer]) > Math.abs(array[rightPointer])) {
      sortedSquares[i] = array[leftPointer] * array[leftPointer];
      leftPointer++;
    }
  }
  return sortedSquares;
}
