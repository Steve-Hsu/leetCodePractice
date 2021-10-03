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