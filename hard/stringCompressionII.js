/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

// Since there are only 26 char in English,
var getLengthOfOptimalCompression = function (s, k) {
  let res = ""
  let repeat = 1
  for (let i = 0; i < s.length; i++) {

    while (s[i] === s[i + 1]) {
      ++i
      repeat++
    }

    if (repeat > 1) {
      res = res + s[i - 1] + repeat
      repeat = 1 // default repeat for next loop
    }

  }
  console.log(res)
  return res.length
};

// Other solution 
// from https://leetcode.com/problems/string-compression-ii/discuss/755970/Python-dynamic-programming
// Coder https://leetcode.com/klimkina/
const getLengthOfOptimalCompression = (s, k) => {
  const memo = new Map()

  const backtrack = (i, lastChar, lastCharCount, k) => {
    if (k < 0) return Number.POSITIVE_INFINITY
    if (i >= s.length) return 0

    const memoKey = `${i}#${lastChar}#${lastCharCount}#${k}`
    if (memoKey in memo) return memo[memoKey]

    if (s[i] === lastChar) {
      const incrementor = [1, 9, 99].includes(lastCharCount) ? 1 : 0
      memo[memoKey] = incrementor + backtrack(i + 1, lastChar, lastCharCount + 1, k)
    } else {
      memo[memoKey] = Math.min(
        1 + backtrack(i + 1, s[i], 1, k), //keep char
        backtrack(i + 1, lastChar, lastCharCount, k - 1) //delete char
      )
    }
    return memo[memoKey]
  }
  return backtrack(0, '', 0, k)
}