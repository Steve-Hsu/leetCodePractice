/**
 * @param {number[]} nums
 * @return {number}
 */
// My solution but slow
var missingNumber = function (nums) {
  nums.sort((a, b) => a - b)
  let next = 0
  for (v of nums) {
    if (v !== next) return next
    next = v + 1
  }
  return next

};

//https://leetcode.com/problems/missing-number/discuss/1091153/JS-Python-Java-C%2B%2B-or-Easy-1-Line-Solutions-w-Explanation
//Idea:
// The sum of the numbers from 1 to N is the Nth triangular number, defined as N * (N + 1) / 2. It stands to reason, then, that we can simply find the difference between the Nth triangular number and the sum of nums, which should be our missing number.
const missingNumber = nums =>
  nums.length * (nums.length + 1) / 2 - nums.reduce((a, c) => a + c)