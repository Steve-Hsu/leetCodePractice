/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */

// I can't even understand well about the question
//https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/

// Solution from https://leetcode.com/Speedhunter/
//Bottom Up Approach (DP) Using Only A Single Array
var numRollsToTarget = function (d, f, target) {
  const MOD = 1e9 + 7;
  const dp = new Array(target + 1).fill(0);

  for (let face = 1; face <= Math.min(f, target); face++) {
    dp[face] = 1;
  }

  for (let dice = 2; dice <= d; dice++) {
    for (let num = target; num > 0; num--) {

      dp[num] = 0;

      for (let face = 1; face <= Math.min(f, num); face++) {
        const diff = num - face;
        dp[num] = (dp[num] + dp[diff]) % MOD;
      }
    }
  }

  return dp[target];
};