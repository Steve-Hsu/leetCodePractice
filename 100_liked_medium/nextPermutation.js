/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// let arr = [3, 2, 1]
// My Solution, works but super slow
var nextPermutation = function (nums) {
  let length = nums.length
  let max = nums[length - 1]
  nums[length - 1] = Infinity
  let cache = [max]
  for (let i = length - 2; i >= 0; i--) {
    if (max > nums[i]) {
      // sort the cache in ascending order
      cache.sort((a, b) => a - b)
      // Find the unit just greater then nums[i] in cache
      let secondMax_idx = cache.indexOf(max) - 1
      while (cache[secondMax_idx] && cache[secondMax_idx] > nums[i]) {
        max = cache[secondMax_idx]
        secondMax_idx -= 1
      }

      // Put nums[i] to the cache with id, so the unit in cache still in its ascending order
      cache[secondMax_idx + 1] = nums[i]
      nums[i] = max

      // backword to insert the number in nums in a ascending order.
      // Backword from position where we find the max > nums[i]
      for (let x = i + 1; x < length; x++) {
        let num = cache.shift()
        if (nums[x] > num) nums[x] = num
      }
      return nums

    } else {
      max = Math.max(nums[i], max)
      cache.push(nums[i])
      nums[i] = Infinity
    }
  }

  for (idx in nums) {
    nums[idx] = cache[idx]
  }
  return nums
}


let arr = [5, 6, 6, 7, 3, 2, 1]
// Other solution
// From Nguyen Loc https://leetcode.com/loctn/
var nextPermutation_1 = function (nums) {
  let j = nums.length - 1, i = j - 1;
  while (nums[i + 1] <= nums[i]) i--;
  if (~i) {
    while (nums[j] <= nums[i]) j--;
    swap(nums, i, j);
  }
  // console.log("i", i, "j", j)
  for (let k = i + 1, stop = (i + nums.length) / 2; k < stop; k++) {
    swap(nums, k, nums.length - k + i);

  }
  return nums
};

function swap(nums, x, y) {
  let temp = nums[x];
  nums[x] = nums[y];
  nums[y] = temp;
}

console.log(
  nextPermutation_1(arr)
)
