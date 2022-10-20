/**
 * @param {number[]} nums
 * @return {number}
 */
//https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/
// My solution
var findMaxK = function (nums) {
  if (nums.length <= 1) return -1
  nums = nums.sort((a, b) => a - b)

  let l = 0
  let r = nums.length - 1
  while (l < r) {
    const left = nums[l]
    const right = nums[r]
    if (left + right === 0) return right
    if (left + right > 0) r--
    if (left + right < 0) l++
  }
  return -1
};

var findMaxK = function (nums) {
  if (nums.length <= 1) return -1
  nums = nums.sort((a, b) => a - b)

  let l = 0
  let r = nums.length - 1
  while (l < r) {
    const left = nums[l]
    const right = nums[r]
    const sum = left + right
    if (sum === 0) return right
    if (sum > 0) r--
    if (sum < 0) l++
  }
  return -1
};

var findMaxK = function (nums) {
  if (nums.length <= 1) return -1

  let l = 0, r = nums.length - 1
  nums = nums.sort((a, b) => a - b)

  while (l < r) {
    if (nums[l] + nums[r] === 0) return nums[r]
    if (nums[l] + nums[r] > 0) r--
    else l++
  }

  return -1
};