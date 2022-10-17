/**
 * @param {number[]} jobDifficulty
 * @param {number} d
 * @return {number}
 */

// The question explanation
// Separate the jobDifficulty, which is an array, with d, which is a number.
// You are not allowed to sort the jobDifficulty.
// Pick the humber greatest in each day, from jobDifficuly you separated by d. 
// And return the minimum sum from any conbination of separated jobDifficulty
// For example, jobDifficuly = [7,1,7,1,7,1], d = 3, the answer is 15.
// You separate d1 = 7,1,7, d2 = 1,7, d3 = 1.
// Pick the greatest number from each day that is d1 = 7, d2 = 7, d3 = 1, then the sum is 15. 

// My test
var minDifficulty = function (jobDifficulty, d) {


};

// Solution from https://leetcode.com/xiaoming2/
//https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/discuss/490816/Javascript-DP-solution
var minDifficulty = function (jobDifficulty, d) {
  let n = jobDifficulty.length;
  // rangeMax[i][j] storing max job difficulty from job i to job j
  let rangeMax = Array.from({ length: n }, () => Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    rangeMax[i][i] = jobDifficulty[i];
    for (let j = i + 1; j < n; j++) {
      rangeMax[i][j] = Math.max(rangeMax[i][j - 1], jobDifficulty[j]);
    }
  }
  // dp[i][j]: minimal total value at day i completing job j, final answer in dp[d-1][n-1]
  let dp = Array.from({ length: d }, () => Array(n).fill(Number.MAX_VALUE));
  dp[0] = [...rangeMax[0]];
  for (let i = 1; i < d; i++) {
    for (let j = i; j < n; j++) {
      for (let k = i - 1; k < j; k++) {
        dp[i][j] = Math.min(dp[i][j], dp[i - 1][k] + rangeMax[k + 1][j]);
      }
    }
  }
  return (dp[d - 1][n - 1] === Number.MAX_VALUE) ? -1 : dp[d - 1][n - 1];

};