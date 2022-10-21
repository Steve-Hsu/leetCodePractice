/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */

// My solution
var numOfStrings = function (patterns, word) {
  let count = 0
  for (let str of patterns) {
    if (word.indexOf(str) >= 0) count++
  }
  return count
};

// More neat
var numOfStrings = function (patterns, word) {
  let count = 0
  for (let str of patterns) {
    if (word.match(str, "g")) count++
  }
  return count
};

// Reduce version
var numOfStrings = function (patterns, word) {
  return patterns.reduce((res, str) => {
    res = word.indexOf(str) >= 0 ? res + 1 : res + 0
    return res
  }, 0)
};

// Reduce neat
var numOfStrings = function (patterns, word) {
  return patterns.reduce((res, str) => res = word.match(str, "g") ? res + 1 : res, 0)
};

var numOfStrings = function (patterns, word) {
  return patterns.reduce((res, str) => res = word.indexOf(str) >= 0 ? res + 1 : res, 0)
};

// More neat
var numOfStrings = (p, w) => p.reduce((res, str) => res = w.indexOf(str) >= 0 ? res + 1 : res, 0)
