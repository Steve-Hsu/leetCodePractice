/**
 * @param {string} s
 * @return {string}
 */

let s = "babad";
// Center index
// Solution from Linfongi https://leetcode.com/problems/longest-palindromic-substring/discuss/2926/8-Line-JavaScript-solution
var longestPalindrome = function (s) {
  // ll: Left index of the longest palindrome.
  // rr: Right index of the longest palindrome.
  let ll = 0, rr = 0;

  // Iterate all palindromes with center indices
  // [..., i, ...] or [... i, i+1, ...]
  for (let i = 0; i < s.length; i++)

    // this loop is to take into account 
    // different palindromes like 'aba' and 'abba'
    for (let j of [i, i + 1])

      for (l = i, r = j; s[l] && s[l] === s[r]; l--, r++)

        // Found a new palindrome [l, ..., i, j, ..., r]
        // Update the ll, rr if the newly found palindrome is longer than the
        // existing one.
        [ll, rr] = (r - l + 1) > (rr - ll + 1) ? [l, r] : [ll, rr];

  return s.substring(ll, rr + 1);
};

console.log(longestPalindrome(s))

// Center index
// Solution from DawChinLiou https://leetcode.com/problems/longest-palindromic-substring/discuss/548834/Intuitive-JavaScript-Solution-with-Expand-around-Center
var longestPalindrome_1 = function (s) {
  let longest = '';
  const findLongestPalindrome = (str, i, j) => {
    while (i >= 0 && j < str.length && str[i] === str[j]) {
      i -= 1;
      j += 1;
    }
    // slice the qualified substring from the second last iteration
    return str.slice(i + 1, j);
  }
  for (let i = 0; i < s.length; i++) {
    // palindrome can center around 1 or 2 letters
    const current1 = findLongestPalindrome(s, i, i);
    const current2 = findLongestPalindrome(s, i, i + 1);
    const longerPalindrome =
      current1.length > current2.length ? current1 : current2;
    if (longerPalindrome.length > longest.length) {
      longest = longerPalindrome;
    }
  }
  return longest;
};

// 2D DP
// Solution from bloddybear https://leetcode.com/problems/longest-palindromic-substring/discuss/428331/Javascript-DP
var longestPalindrome_2 = function (s) {

  if (s.length <= 1) return s;

  // construct a 2D array
  const dp = [...new Array(s.length + 1)].map(_ => new Array(s.length + 1).fill(false));

  let lps = '';

  // base case for one character
  for (let i = 0; i < s.length; i++) {
    dp[i][i] = true;
    lps = s[i];
  }

  // base case for two characters
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) dp[i][i + 1] = true;
    if (dp[i][i + 1]) lps = s.substring(i, i + 2);
  }

  // expand to three or more characters
  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i + 2; j < s.length; j++) {
      dp[i][j] = dp[i + 1][j - 1] && s[i] === s[j];
      if (dp[i][j]) lps = lps.length < (j - i + 1) ? s.substring(i, j + 1) : lps;
    }
  }

  return lps;
}