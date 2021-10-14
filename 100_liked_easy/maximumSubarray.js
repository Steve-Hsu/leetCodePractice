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

// Solution_2 from Mike Lin https://github.com/linfongi
// This code run faster !!
function maxSubArray_2(A) {
  var prev = 0;
  var max = -Number.MAX_VALUE;

  for (var i = 0; i < A.length; i++) {
    prev = Math.max(prev + A[i], A[i]);
    max = Math.max(max, prev);
  }
  return max;
}

