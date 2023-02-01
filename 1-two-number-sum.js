// given an array of normalized numbers and a target sum
// return the pair of numbers that sum upto the target sum

numbers = [1, 2, 5, 9, 6, 7];
targetNumber = 10;

console.log(findTwoNumbers(numbers, targetNumber));

// time complexity O(nLog(n)), space complexity O(1) // solved with two pointer technique
function findTwoNumbers(nums, targetSum) {
  nums.sort();
  leftPointer = 0;
  rightPointer = nums.length - 1;

  while (leftPointer < rightPointer) {
    if (nums[leftPointer] + nums[rightPointer] === targetSum) {
      return [nums[leftPointer], nums[rightPointer]];
    } else if (nums[leftPointer] + nums[rightPointer] < targetSum) {
      leftPointer += 1;
    } else if (nums[leftPointer] + nums[rightPointer] > targetSum) {
      rightPointer -= 1;
    }
  }
  return [];
}
