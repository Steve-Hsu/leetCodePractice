/**
 * @param {string} s
 * @return {number}
 */


// LeetCode Solution_2, this is more easy for me to understand
/*
Approach 2: Iterative Approach
The iterative approach might be a little bit less intuitive. Let's try to understand it. 
We use an array for DP to store the results for subproblems. 
A cell with index i of the dp array is used to store the number of decode ways for substring of s from index 0 to index i-1.

We initialize the starting two indices of the dp array. 
It's similar to relay race where the first runner is given a baton to be passed to the subsequent runners. 
The first two indices of the dp array hold a baton. 
As we iterate the dp array from left to right this baton which signifies the number of ways of decoding is passed to the next index or not depending on whether the decode is possible.

dp[i] can get the baton from two other previous indices, either i-1 or i-2. Two previous indices are involved since both single and two digit decodes are possible.

Unlike the relay race we don't get only one baton in the end. The batons add up as we pass on. If someone has one baton, they can provide a copy of it to everyone who comes to them with a success. Thus, leading to number of ways of reaching the end.
*/
var numDecodings = function (s) {
  let dp = Array(s.length + 1).fill(0)
  dp[0] = 1
  dp[1] = s.charAt(0) == '0' ? 0 : 1;

  for (let i = 2; i < dp.length; i++) {
    if (s.charAt(i - 1) != '0') dp[i] = dp[i - 1];
    let twoDigit = Number(s.substring(i - 2, i))
    if (twoDigit >= 10 && twoDigit <= 26) dp[i] += dp[i - 2]

  }
  return dp[s.length]
};

console.log(
  numDecodings("121")
)
//-----------------------------------------------------------------------
// leetCode solution_1
var numDecodings = function (s) {
  let memo = new Map()
  return recursiveWithMemo(0, s)

  function recursiveWithMemo(idx, str) {
    console.log(memo)
    if (memo.has(idx)) return memo.get(idx)
    if (idx === str.length) return 1
    if (str.charAt(idx) == "0") return 0
    if (idx == str.length - 1) return 1

    let ans = recursiveWithMemo(idx + 1, str);
    if (Number(str.substring(idx, idx + 2)) <= 26) {
      ans += recursiveWithMemo(idx + 2, str)
    }

    memo.set(idx, ans)
    return ans;
  }
};


// Solution from https://leetcode.com/jesseokeya/
var numDecodings = function (s) {
  const helper = (str, strLength, memo) => {
    if (strLength === 0) return 1
    const idx = str.length - strLength

    if (str[idx] === '0') return 0
    if (memo.has(strLength)) return memo.get(strLength)

    let result = helper(str, strLength - 1, memo)

    const isAlphabetical = Number(str.substring(idx, idx + 2)) <= 26
    if (strLength >= 2 && isAlphabetical) result += helper(str, strLength - 2, memo)

    memo.set(strLength, result)
    return result
  }

  return helper(s, s.length, new Map())
};