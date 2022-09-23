/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

// let arr = [2, 4, 6]
// let arr = [2, 3, 6, 7]
let arr = [7, 3, 2]
let t = 18
// My solution 
var combinationSum = function (nums, target) {
  nums.sort((a, b) => a - b)
  let res = []
  binarySearch(0, [], target);
  return res;

  function binarySearch(idx, temp, newTarget) {
    if (newTarget === 0) res.push(Array.from(temp))
    if (idx === nums.length) return;
    if (newTarget <= 0) return;
    temp.push(nums[idx])
    binarySearch(idx, temp, newTarget - nums[idx])
    temp.pop()
    binarySearch(idx + 1, temp, newTarget)
  }
}

console.log(
  combinationSum(arr, t)
)
// Best solution From Mark Lin
// https://leetcode.com/problems/combination-sum/discuss/16758/JavaScript-Solution
function combinationSum_best(candidates, target) {
  candidates.sort((a, b) => a - b);

  var length = candidates.length;
  var res = [];
  search(0, [], target);
  return res;

  function search(idx, prefix, target) {
    if (target === 0) res.push(prefix.slice()); // prefix.slice(): make sure what push to res is a new array same content as prefix, but inheritance already being cut
    if (idx === length) return;
    if (target <= 0) return;

    prefix.push(candidates[idx]);
    search(idx, prefix, target - candidates[idx]); // for go deepth
    prefix.pop();
    search(idx + 1, prefix, target); // for go breadth 
  }
};
