/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// LeetCode solution
var threeSumClosest = function (nums, target) {
  let diff = Infinity
  let sz = nums.length
  nums.sort((a, b) => a - b)
  for (let i = 0; i < sz && diff != 0; ++i) {
    let lo = i + 1;
    let hi = sz - 1;
    while (lo < hi) {
      let sum = nums[i] + nums[lo] + nums[hi]
      if (Math.abs(target - sum) < Math.abs(diff)) {
        diff = target - sum;
      }
      if (sum < target) {
        ++lo;
      } else {
        --hi;
      }
    }
  }
  return target - diff;
};

let arr = [1, 2, 3, 4, 5, 6, 7, -1, -2, -3]

console.log(
  threeSumClosest(arr, 7)
)

// LeetCode solution, neat version
var threeSumClosest = function (nums, target) {
  let [diff, sz] = [Infinity, nums.length]
  nums.sort((a, b) => a - b)
  for (let i = 0; i < sz && diff != 0; ++i) {
    let [lo, hi] = [i + 1, sz - 1]
    while (lo < hi) {
      let sum = nums[i] + nums[lo] + nums[hi]
      if (Math.abs(target - sum) < Math.abs(diff)) diff = target - sum;
      if (sum < target) ++lo;
      else --hi;
    }
  }
  return target - diff;
};
