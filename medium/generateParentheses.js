/**
 * @param {number} n
 * @return {string[]}
 */
// Solution from 
https://leetcode.com/problems/generate-parentheses/discuss/2383605/Fastest-Solution-Explained0ms100-O(n)time-complexity-O(n)space-complexity-(
const generateParenthesis = (n) => {
  const res = [];

  const go = (l, r, s) => {
    if (s.length === 2 * n) {
      res.push(s);
      return;
    }

    if (l < n) go(l + 1, r, s + '(');
    if (r < l) go(l, r + 1, s + ')');
  };

  go(0, 0, '');
  return res;
};