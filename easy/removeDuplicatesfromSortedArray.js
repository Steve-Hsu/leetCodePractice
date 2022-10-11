/**
 * @param {number[]} nums
 * @return {number}
 */
// My solutoin, worked but slow
var removeDuplicates = function (nums) {
  let length = nums.length
  let set = new Set()
  for (let i = 0; i < length; i++) {
    let temp = nums.shift()
    if (!set.has(temp)) {
      nums.push(temp)
    }
    set.add(temp)
  }
};

// My solutoin, worked but slow
var removeDuplicates = function (nums) {
  let length = nums.length
  let check = -Infinity
  for (let i = 0; i < length; i++) {
    let temp = nums.shift()
    if (temp != check) {
      nums.push(temp)
    }
    check = temp
  }
};



// Smart Solution from https://leetcode.com/problems/remove-duplicates-from-sorted-array/discuss/248020/My-easy-Javascript-Solution
// similar with concept of two pointers
var removeDuplicates = function (nums) {
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] != nums[i])
      nums[++i] = nums[j];
  }
  return ++i;
};