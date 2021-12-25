/**
 * @param {number} n
 * @return {number}
 */
// My solution, works but slow
var arrangeCoins_my_solution = function (n) {
  if (n === 1) return 1
  let value = 0
  for (let i = 1; n >= i; i++) {
    value = value ? value + i : i;
    let left = i
    let right = value
    if (n === right) return left
    if (n >= left && n < right) return left - 1
  }
};

// Other Solutions
// ybmlk https://leetcode.com/problems/arranging-coins/discuss/668468/JavaScript-Clean-3-Liner
var arrangeCoins = function (n) {
  let stairs = 0;
  while (stairs <= n) { n -= stairs; stairs++; }
  return stairs - 1
};