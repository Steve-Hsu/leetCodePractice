/**
 * @param {number[]} nums
 * @return {number}
 */
let arr = [2, 1]
// My solution, works, run in average score
var firstMissingPositive = function (nums) {
  let idx = 0
  let length = nums.length
  let min_p = 1 // default answer is 1
  let memo = new Map()

  while (idx < length) {
    let curr = nums[idx]

    if (curr === min_p) { // if current num equals to possible answer
      ++min_p // add 1 to possible answer  
      while (memo.get(min_p)) { // if its already in our memo then add 1 to check again
        ++min_p
      }
    } else {
      memo.set(curr, true) // If current num is new in memo, set it with value TRUE in memo
    }
    ++idx
  }
  return min_p
};

// Neat version - map
var firstMissingPositive = function (nums) {
  let idx = 0,
    length = nums.length,
    min_p = 1,
    memo = new Map()

  while (idx < length) {
    if (nums[idx] === min_p) while (memo.get(++min_p));
    else memo.set(nums[idx], true)
    ++idx
  }
  return min_p
};

// Neat version - obj as memo, obj seems run faster than Map
var firstMissingPositive = function (nums) {
  let idx = 0,
    length = nums.length,
    min_p = 1,
    memo = {}

  while (idx < length) {
    if (nums[idx] === min_p) while (memo[++min_p]);
    else memo[nums[idx]] = true
    ++idx
  }
  return min_p
};



console.log(
  firstMissingPositive(arr)
)

// Other solution 
// It runs faster and less memo
// from Seif https://leetcode.com/seifmamdouh78/
function firstMissingPositive(nums) {
  let i = 0;
  n = nums.length;
  while (i < n) {
    let j = nums[i] - 1;
    if (nums[i] > 0 && nums[i] <= n && nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
    } else {
      i += 1;
    }
  }
  for (i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }

  return nums.length + 1;
};