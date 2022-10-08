/**
 * @param {number[]} nums
 * @return {number}
 */

// My solution
var thirdMax = function (nums) {
  let Max = Math.max(...nums)
  let arr = nums.filter((n) => n != Max)
  let secondMax = Math.max(...arr)
  let arr_2 = arr.filter((n) => n != secondMax)
  if (arr_2.length === 0) return Max
  arr_2.sort((a, b) => a - b)
  let res = arr_2[arr_2.length - 1]

  if (res == Max || res == secondMax) res = Max
  return res
};

// My Solution 2
var thirdMax = function (nums) {
  nums.sort((a, b) => b - a)
  let Max = nums[0]
  let second = third = -Infinity

  for (num of nums) {
    if (num < Max && num > second) second = num
    if (num < second && num > third) return third = num
  }
  return Max
};

// My solution Neat version
var thirdMax = function (nums) {
  nums.sort((a, b) => b - a)
  let [Max, second] = [nums[0], -Infinity]

  for (num of nums) {
    if (num < Max && num > second) second = num
    if (num < second) return num // Find third, the num is third so return the num
  }
  return Max // There are no third, so return the max
};

//
var thirdMax = function (nums) {
  // nums.sort((a, b) => b - a)
  let Max = Math.max(...nums)
  let third = Math.min(...nums)
  let second = -Infinity

  for (num of nums) {
    if (num < Max && num > second) second = num
    if (num < second && num > third) third = num // Find third and return the third
  }
  if (third < second && second < Max) return third
  return Max // There are no third, so return the max
};