/**
 * @param {number} rowIndex
 * @return {number[]}
 */
//https://leetcode.com/problems/pascals-triangle-ii/
// My solution
var getRow = function (numRows) {
  if (numRows === 0) return [1]
  if (numRows === 1) return [1, 1]
  let res = [[1], [1, 1]]

  let loop = 2
  while (loop++ < numRows + 1) {
    const pre = res[res.length - 1]
    const temp = []
    for (let i = 1; i < pre.length; i++) temp.push(pre[i - 1] + pre[i])
    res.push([1, ...temp, 1])
  }
  return res[res.length - 1]
};

// neat
var getRow = function (numRows) {
  if (numRows === 0) return [1]
  if (numRows === 1) return [1, 1]
  let res = [1, 1]

  let loop = 1
  while (loop++ < numRows) {
    const pre = res
    let temp = []
    for (let i = 1; i < pre.length; i++) temp.push(pre[i - 1] + pre[i])
    res = [1, ...temp, 1]
  }
  return res
};

// Solution from https://leetcode.com/lzhoucs/
var getRow = function (rowIndex) {
  var row = [1];

  for (var i = 1; i <= rowIndex; i++) {
    for (var j = i; j > 0; j--) {
      if (j === i)
        row[j] = 1;
      else
        row[j] = row[j - 1] + row[j];
    }
  }
  return row;
};