/**
 * @param {number} n
 * @return {number[]}
 */

// LeetCode solution
var countBits = function (n) {
  let ans = [0 * (n + 1)];
  for (let x = 1; x <= n; ++x) {
    ans[x] = ans[x & (x - 1)] + 1;
  }
  return ans
};

// Other solution 
// From DawChinLiou https://leetcode.com/problems/counting-bits/discuss/79592/Intuitive-Javascript-Solution

var countBits_1 = function (num) {
  let bits = [];
  for (let i = 0; i <= num; i++)
    // remove 0 from bits
    bits.push(Number(i).toString(2).replace(/0/g, '').length);
  return bits;
};

// From gvenezia https://leetcode.com/problems/counting-bits/discuss/79592/Intuitive-Javascript-Solution

const countBits_2 = (num) =>
  Array(num + 1).fill().map((c, i) =>
    i.toString(2).replace(/0/g, '').length
  )

// From carti https://leetcode.com/problems/counting-bits/discuss/853078/typescript-%2B-javascript-3-line-o(n)-beats-100-w-VERY-DETAILED-explanation
function countBits_3(num) {
  const res = new Uint8Array(num + 1);
  for (let i = 0; i < res.length; i++) res[i] = res[i >> 1] + (i & 1);
  return [...res];
}