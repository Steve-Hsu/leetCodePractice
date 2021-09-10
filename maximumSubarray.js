/**
 * @param {number[]} nums
 * @return {number}
 */

// My Solution_1
var maxSubArray = function (nums) {
  let currentMax = nums[0];
  let sum = 0

  for (item of nums) {
    if (sum < 0) {
      sum = item
    } else {
      sum = sum + item
    }
    if (currentMax < item) {
      currentMax = item
    }
    if (currentMax < sum) {
      currentMax = sum
    }
  }
  return currentMax
};

let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log(maxSubArray(nums))