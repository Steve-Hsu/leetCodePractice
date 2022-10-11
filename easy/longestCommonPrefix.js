/**
 * @param {string[]} strs
 * @return {string}
 */
// My solution 
// Compare the string
var longestCommonPrefix = function (strs) {
  let n = 0
  let prefix = strs[0].charAt(0)

  while (n++ <= strs[0].length) {
    for (let i = 0; i < strs.length; i++) {
      let str = strs[i]
      if (prefix != str.substring(0, n)) return prefix.substring(0, n - 1)
      if (i === strs.length - 1) prefix = str.substring(0, n + 1)
    }
  }
  return prefix
};

// Solution from https://leetcode.com/linfongi/
// Compare the char
function longestCommonPrefix(strs) {
  if (!strs.length) return '';

  for (let i = 0; i < strs[0].length; i++) {
    for (let str of strs) {
      if (str[i] !== strs[0][i]) {
        return str.slice(0, i);
      }
    }
  }

  return strs[0];
}