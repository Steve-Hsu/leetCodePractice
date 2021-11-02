/**
 * @param {number} n
 * @return {number}
 */
// My Solution : I try to imitate the pattern and get the number for each Vowel.
var countVowelStrings = function (n) {
  if (n === 1) return 5;
  let a = 5, e = 4, i = 3, o = 2, u = 1;
  for (let loop = 2; loop < n; loop++)
    [a, e, i, o, u] = [a + e + i + o + u, e + i + o + u, i + o + u, o + u, 1]

  return a + e + i + o + u
};

console.log(countVowelStrings(2))

// LeetCode solution 
var countVowelStrings_1 = function (n) {
  return (n + 4) * (n + 3) * (n + 2) * (n + 1) / 24;
};

console.log(countVowelStrings_1(2))