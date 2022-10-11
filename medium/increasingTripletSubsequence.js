/**
 * @param {number[]} nums
 * @return {boolean}
 */
// Find the i, j, k that both value and index in the pattern of i < j < k
// My first solution
var increasingTriplet = function (nums) {
  let i = nums[0]
  let j = Infinity
  let smallestOfPreviousJ = Infinity
  for (let idx = 1; idx < nums.length; idx++) {
    let curr = nums[idx]
    if (curr > j || curr > smallestOfPreviousJ) return true
    if (curr > i && curr < j) j = curr
    if (curr < i) {
      smallestOfPreviousJ = Math.min(smallestOfPreviousJ, j)
      i = curr
      j = Infinity
    }
  }
  return false
};


// My best solution
var increasingTriplet = function (nums) {
  let i = j = Infinity
  for (let idx = 0; idx < nums.length; idx++) {
    const curr = nums[idx]
    if (curr > j) return true // curr is the k
    if (curr > i) j = Math.min(j, curr)
    else i = curr
  }
  return false
};

var increasingTriplet = function (nums) {
  let small = mid = Infinity
  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i]
    if (curr > mid) return true
    if (curr > small) mid = Math.min(mid, curr)
    else small = curr
  }
  return false
};

