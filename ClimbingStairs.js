/**
 * @param {number} n
 * @return {number}
 */
let N = 1
// My solution 1: Number series pattern mactch
// I observe the pattern of the result. 
// * You can see, after (n) is greater than 4, the result is previous result  + previous of previous of result. 
// * For example:
// * (n) = 4, it’s is 3 + 2 = 5.
// * (n) = 5, it’s is 3 + 5 = 8.  3 is result of(3), and 5 is result of(4)
// * (n) = 6, it’s is 5 + 8 = 8.  5 is result of(4), and 8 is result of(5)
const patternClimbStairs = (n) => {
  if (n <= 3) return n;
  let result = 0
  let prev_1 = 3
  let prev_2 = 2
  const climb_Stairs = (i, n) => {

    result = prev_1 + prev_2;
    prev_2 = prev_1;
    prev_1 = result;
    if (i === n) return result;
    return climb_Stairs(i + 1, n)
  }
  return climb_Stairs(4, n)
}
console.log("N:", N, "Result:", patternClimbStairs(N));


// Leetcode solution 1, Brute Force 
const bruteForceClimbStairs = (n) => {
  const climb_Stairs = (i, n) => {
    // i defines the current step
    // n defines the destination step.
    if (i > n) return 0;
    if (i === n) return 1;
    return climb_Stairs(i + 1, n) + climb_Stairs(i + 2, n);
  }
  return climb_Stairs(0, n)
};
console.log("N:", N, "Brute force:", bruteForceClimbStairs(N));


// LeetCode solution 2: Recursion with Memoization
const memoClimbStairs = (n, memo = []) => {
  const climb_Stairs = (i, n) => {
    // i defines the current step
    // n defines the destination step.
    if (i > n) return 0;
    if (i === n) return 1;
    if (memo[i] > 0) return memo[i]
    memo[i] = climb_Stairs(i + 1, n) + climb_Stairs(i + 2, n);
    return memo[i]
  }
  return climb_Stairs(0, n)
}
console.log("N:", N, "Recursion with memo:", memoClimbStairs(N));


// LeetCode solution : Dynamic Programming
const dynamicClimbStairs = (n) => {
  let db = []
  db[1] = 1;
  db[2] = 2;
  const climb_Stairs = (i, n) => {
    // i defines the current step
    // n defines the destination step.
    if (n < 3) return db[n];
    db[i] = db[i - 1] + db[i - 2];
    if (i === n) return db[i];
    return climb_Stairs(i + 1, n)
  }
  return climb_Stairs(3, n)
}
console.log("N:", N, "Dynamic programming:", dynamicClimbStairs(N));


// LeetCode solution : Fibonacci Formula
const FiboFormulaClimbStairs = (n) => {
  const sqrt5 = Math.sqrt(5);
  const fibn = Math.pow((1 + sqrt5) / 2, n + 1) - Math.pow((1 - sqrt5) / 2, n + 1);
  return Math.floor(fibn / sqrt5);
}
console.log("N:", N, "Fibonacci formula:", FiboFormulaClimbStairs(N));