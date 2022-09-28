/**
 * @param {number[]} nums
 * @return {number}
 */

// Worked but when the length of nums more then maybe 23, the function can run forever.
var jump_not_work = function (nums) {
  let length = nums.length;
  let set = new Set()
  countStep(0, 0, length - 1)
  console.log(set)
  // let r = Math.min(...arr, length);
  return Math.min(...set)
  function countStep(idx, steps, length_rest) {

    console.log("idx", idx, "steps", steps, "length", length_rest)
    if (length_rest === 0) {
      set.add(steps)
      return;
    }
    if (length_rest <= 0) {
      return;
    }
    // if (arr.length > length) return;

    let jump_length = nums[idx]

    while (jump_length > 0 && idx < length) {
      ++idx
      --length_rest;
      // if (jump_length === 1) countStep(idx, steps + 1, length_rest);
      countStep(idx, steps + 1, length_rest);

      jump_length--
    }
  }
};


let nums = [5, 6, 4, 4, 6, 9, 4, 4, 7, 4, 4, 8, 2, 6, 8, 1, 5, 9, 6, 5, 2, 7, 9, 7, 9, 6, 9, 4, 1, 6, 8, 8, 4, 4, 2, 0, 3, 8, 5] // This length for my solution runs forever
console.log(
  jump(nums)
)

// LeetCode solution
// Good exlination from Nick Zhang https://leetcode.com/AminiCK/
//1.) We know that every point is reachable, so we are only looking for the relationship between the maximum reach of each index and the number of jumps
//2.) Farthest is the previous jump's maximum reach, if we are at the old max, that means no matter how we move, the next move will cost an extra jump, thus we increment jump, at the same time, we update the Farthest to the current global max. This max, indicates the maximum reach we will have by having an extra jump.
var jump = function (nums) {
  let jumps = 0, currentJumpEnd = 0, farthest = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);
    if (i === currentJumpEnd) {
      jumps++;
      currentJumpEnd = farthest;
    }
  }
  return jumps
}

console.log(
  jump(nums)
)
