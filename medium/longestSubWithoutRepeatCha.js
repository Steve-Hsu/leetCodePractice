/**
 * @param {string} s
 * @return {number}
 */

const s = "abcabcbb"
// const s = "pwwkew"
// const s = "dvdf"

// My solution - ref to linfongi's solution
var lengthOfLongestSubstring = function (s) {
  let arr = s.split("");
  let map = {};
  let left = 0;
  return arr.reduce((result, i, idx) => {
    left = map[i] >= left ? map[i] + 1 : left;
    map[i] = idx;
    let length = idx - left + 1
    return Math.max(result, length)
  }, 0)
};

console.log(
  lengthOfLongestSubstring(s)
)

// const s = "abcabcbb"
// Other solution 
// From linfongi https://leetcode.com/problems/longest-substring-without-repeating-characters/discuss/2291/9-line-JavaScript-solution
const lengthOfLongestSubstring_1 = (s) => {
  // keeps track of the most recent index of each letter.
  const map = {};
  // keeps track of the starting index of the current substring.
  var left = 0;

  return s.split('').reduce((max, v, i) => {
    // starting index of substring is 1 + (the last index of this letter) to ensure this letter is not counted twice.
    left = map[v] >= left ? map[v] + 1 : left;
    // updates last recorded index of letter to the most recent index.
    map[v] = i;

    // indices of current substring is (idx - leftIdx, idx).
    // +1 because if your substring starts and ends at index 0, it still has a length of 1.
    return Math.max(max, i - left + 1);
  }, 0)
}
console.log(
  lengthOfLongestSubstring_1(s)
)

// From daleighan https://leetcode.com/problems/longest-substring-without-repeating-characters/discuss/475803/JavaScript-Sliding-Window
function lengthOfLongestSubstring_2(s) {
  let seen = new Set();
  let longest = 0;
  let l = 0;
  for (let r = 0; r < s.length; r++) {
    while (seen.has(s[r])) {
      seen.delete(s[l]);
      l++;
    }
    seen.add(s[r]);
    longest = Math.max(longest, r - l + 1);
  }
  return longest;
};
console.log(
  lengthOfLongestSubstring_2(s)
)

// From ybmlk https://leetcode.com/problems/longest-substring-without-repeating-characters/discuss/731639/JavaScript-Clean-Heavily-Commented-Solution
var lengthOfLongestSubstring_3 = function (s) {
  // keeps track of the most recent index of each letter.
  const seen = new Map();
  // keeps track of the starting index of the current substring.
  let start = 0;
  // keeps track of the maximum substring length.
  let maxLen = 0;

  for (let i = 0; i < s.length; i++) {
    // if the current char was seen, move the start to (1 + the last index of this char)
    // max prevents moving backward, 'start' can only move forward
    if (seen.has(s[i])) start = Math.max(seen.get(s[i]) + 1, start)
    seen.set(s[i], i);
    // maximum of the current substring length and maxLen
    maxLen = Math.max(i - start + 1, maxLen);
  }

  return maxLen;
};

console.log(
  lengthOfLongestSubstring_3(s)
)

// From arrowing https://leetcode.com/problems/longest-substring-without-repeating-characters/discuss/1855/Fast(greater98)-and-simple-code-in-Javascript-solution
var lengthOfLongestSubstring_4 = function (s) {
  var sLen = s.length,
    maxLen = 0,
    maxStr = '',
    tmpStr,
    posIndex,
    i;

  for (i = 0; i < sLen; i++) {

    tmpStr = s[i];
    posIndex = maxStr.indexOf(tmpStr);

    if (posIndex > -1) {
      maxStr = maxStr.substring(posIndex + 1);
    }

    maxStr += tmpStr;
    maxLen = Math.max(maxLen, maxStr.length);
  }

  return maxLen;
};

console.log(
  lengthOfLongestSubstring_4(s)
)