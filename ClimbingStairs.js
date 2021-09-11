/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // Check the root
  // Get top of root
  // n / 2
};

let test = 3

const addUpTo = (n) => {
  return n * (n + 1) / 2
}

// console.log(addUpTo(test))

// Lootcode solution_1, Brute Force 
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

let N = 3
console.log("Brute force", bruteForceClimbStairs(N));
