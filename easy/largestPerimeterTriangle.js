/**
 * @param {number[]} nums
 * @return {number}
 */
// My solution 
var largestPerimeter = function (nums) {
  nums.sort((a, b) => b - a)
  for (let i = 0; i < nums.length; i++) {
    let a = nums[i], b = nums[i + 1], c = nums[i + 2]
    if (b + c > a) return a + b + c
  }
  return 0
};