/**
 * @param {number} x
 * @return {number}
 */
//https://leetcode.com/problems/sqrtx/

// My solution 
var mySqrt = function (x) {
  if (x === 0 || x === 1) return x
  let idx = 1
  let l = 1
  let r = 2
  while (idx < x) {
    let l = idx * idx
    let r = (idx + 1) * (idx + 1)
    if (x >= l && x < r) return idx
    if (x > l && x <= r) return idx + 1
    idx++
  }
};

var mySqrt = function (x) {
  if (x === 0 || x === 1) return x
  let idx = 0
  while (idx++ <= x) {
    let c = idx * idx
    if (c > x) return idx - 1
  }
};
// Neat solution
var mySqrt = function (x) {
  if (x <= 1) return x
  let idx = 0
  while (idx++ <= x) if (idx * idx > x) return idx - 1
};