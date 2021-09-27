/**
 * @param {number[]} nums
 * @return {number}
 */

const nums = [4, 1, 2, 1, 2];

// My solution
var singleNumber = function (nums) {
  if (nums.length === 1) return nums[0]

  nums.sort((a, b) => {
    if (a > b) return 1
    if (a < b) return -1
    return 0
  })
  let idx_1 = 0, idx_2 = 1

  while (nums.length > 1) {
    if (nums[idx_1] !== nums[idx_2]) return nums[idx_1];
    idx_1 += 2;
    idx_2 += 2;
  }
};

console.log(singleNumber(nums))


// Bit Manipulation
// XOR from leetCode
const xor = (nums) => {
  let a = 0
  for (const v of nums) {
    a ^= v;
  }
  return a;
}

// from other coder
// XOR + reduce from Mkie Lin https://leetcode.com/linfongi/
const xor_2 = (nums) => {
  return nums.reduce((prev, curr) => prev ^ curr);
}