/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */


// const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
// const intervals = [[2, 3], [4, 5], [6, 7], [8, 9], [1, 10]];
const intervals = [[1, 4], [0, 0]]

// My solution 
var merge = function (intervals) {

  if (intervals.length === 1) return intervals

  // Sort the input, the intervals, by its array's 1st item, like: [[1st, 2nd], [1st, 2nd], ...]
  // intervals.sort(([a, _], [b, __]) => a - b)
  intervals.sort((a, b) => a[0] - b[0])
  let ans = [intervals[0]]
  let curr = 0

  for (let i = 1; i < intervals.length; i++) {
    if (ans[curr][1] >= intervals[i][0]) {
      // ans[curr][1] = ans[curr][1] > intervals[i][1] ?
      //   ans[curr][1] : intervals[i][1]
      ans[curr][1] = Math.max(ans[curr][1], intervals[i][1])
    } else {
      ans.push(intervals[i])
      curr++
    }
  }
  return ans
};

console.log(merge(intervals))