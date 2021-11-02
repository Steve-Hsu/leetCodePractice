/**
 * @param {number[]} arr
 * @return {number[][]}
 */

const array = [4, 2, 1, 3]
// My 1st Solution - Super slow
var minimumAbsDifference = function (arr) {
  arr.sort((a, b) => a - b);
  let res = [], gap = arr[arr.length - 1] - arr[0];

  for (let i = 1; i < arr.length; i++) {
    let x = arr[i], y = arr[i - 1], currGap = x - y;

    if (currGap === gap) {
      res.push([y, x])
      continue
    }
    if (currGap < gap) {
      res = [[y, x]]
      gap = currGap
    }
  }
  return res
};

var minimumAbsDifference_2 = function (arr) {
  arr.sort((a, b) => a - b);
  let res = [], gap = arr[arr.length - 1] - arr[0];

  for (let i = 1; i < arr.length; i++) {
    let x = arr[i], y = arr[i - 1], currGap = x - y;
    currGap === gap ?
      res.push([y, x]) : currGap < gap ?
        [res, gap] = [[[y, x]], currGap] : res = res
  }
  return res
};

console.log(minimumAbsDifference(array))