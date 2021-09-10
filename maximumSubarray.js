/**
 * @param {number[]} nums
 * @return {number}
 */

// My Solution_1
var maxSubArray = function (nums) {
  let curMax = nums[0];
  let sum = 0

  for (n of nums) {
    sum = sum < 0 ? n : sum + n;
    if (curMax < n) curMax = n;
    if (curMax < sum) curMax = sum;
  }
  return curMax
};

let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log(maxSubArray(nums))