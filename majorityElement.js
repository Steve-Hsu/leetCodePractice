/**
 * @param {number[]} nums
 * @return {number}
 */

// const nums = [2, 2, 1, 1, 1, 2, 2];
const nums = [2, 2, 1, 2, 2, 2, 2, 3, 4, 3, 6, 4, 2];
var majorityElement = function (nums) {
  let stack = {}
  for (v of nums) {
    if (!stack[`${v}`]) stack[`${v}`] = 1;
    else stack[`${v}`] = stack[`${v}`] + 1;
  }
  return Object.keys(stack).find(key => stack[key] === Math.max(...Object.values(stack)))
};

console.log("majority: ", majorityElement(nums))

// Boyer-moorse Voting algorithm
const boyerMoorseVoting = (nums) => {
  let count = 0;
  let candidate;
  for (const v of nums) {
    if (count === 0) candidate = v;
    count += (v == candidate) ? 1 : -1;
  }
  return candidate;
}


console.log("boyerMoorse: ", boyerMoorseVoting(nums))
