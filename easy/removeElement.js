/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// My solution_1, work but slow
var removeElement = function (nums, val) {
  let arr = nums.filter((i) => i != val)
  for (let i = 0; i < nums.length; i++) {
    if (arr[i] != undefined) {
      nums[i] = arr[i]
    }
  }
  return arr.length
};

// My solution_2, work but slow
var removeElement = function (nums, val) {
  let length = nums.length
  for (let i = 0; i < length; i++) {
    let temp = nums.shift()
    if (temp != val) nums.push(temp)
  }
  return nums.length
};

// Solution from https://leetcode.com/problems/remove-element/discuss/1189866/JavaScript-Solution-Two-Pointers
var removeElement = function (nums, val) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    if (nums[left] === val) {
      nums[left] = nums[right];
      right--;
    }
    else {
      left++;
    }
  }

  return left;
};
