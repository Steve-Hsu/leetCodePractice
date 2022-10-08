/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const arr = [1, 3, 0, 12, 5]
var moveZeroes = function (nums) {
  let length = nums.length;
  let stack = []
  for (let i = 0; i < length; i++) {
    console.log(i)
    let num = nums.shift()
    if (num === 0) {
      stack.push(num)
    } else {
      nums.push(num)
    }
  }

  while (stack.length) {
    let zero = stack.shift();
    nums.push(zero)
  }

  return nums
};

console.log("answer:", moveZeroes(arr))

// From linfongi https://leetcode.com/problems/move-zeroes/discuss/72422/JavaScript-solution
const moveZeros_1 = () => {
  let idx = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[idx] = nums[i];
      nums[i] = idx === i ? nums[i] : 0;
      idx++;
    }
  }
}
// Same logic as moveZeros_1, with ES6 feature.
// From Lastor https://leetcode.com/problems/move-zeroes/discuss/549079/JavaScript-swap-array-elements

var moveZeroes_2 = function (nums) {
  let j = 0  // nonzero count

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      // swap elements
      [nums[j], nums[i]] = [nums[i], nums[j]]
      j++
    }
  }
};

