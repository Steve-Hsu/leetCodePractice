// https://leetcode.com/problems/pascals-triangle/
/**
 * @param {number} numRows
 * @return {number[][]}
 */
// My solution 
var generate = function (numRows) {
  if (numRows === 1) return [[1]]
  if (numRows === 2) return [[1], [1, 1]]
  let res = [[1], [1, 1]]

  let loop = 2
  while (loop++ < numRows) {
    let pre = res[res.length - 1]
    let temp = []
    for (let i = 0; i < pre.length; i++) {
      if (i + 1 == pre.length) break
      let num = pre[i] + pre[i + 1]
      temp.push(num)
    }
    res.push([1, ...temp, 1])
  }
  return res
};

// Neat
// The previous row [i1, i2, i3] generate new row [1, i1+i2, i2+i3, 1]
var generate = function (numRows) {
  if (numRows === 1) return [[1]]
  if (numRows === 2) return [[1], [1, 1]]
  let res = [[1], [1, 1]]

  let loop = 2
  while (loop++ < numRows) {
    const pre = res[res.length - 1]
    const temp = []
    for (let i = 1; i < pre.length; i++) temp.push(pre[i - 1] + pre[i])
    res.push([1, ...temp, 1])
  }
  return res
};

// Solution from https://leetcode.com/nhuesmann/
// Same logic as my solutio, but more neat and easy to understand
// 1210
//+0121 
//------
// 1331
function generate(numRows) {
  if (!numRows || numRows <= 0) return [];

  const pascal = [[1]];

  for (let i = 1; i < numRows; i++) {
    const prevRow = pascal[pascal.length - 1];
    const shiftLeft = [...prevRow, 0];
    const shiftRight = [0, ...prevRow];

    const currentRow = shiftLeft.map((r, i) => r + shiftRight[i]);
    pascal.push(currentRow);
  }

  return pascal;
}