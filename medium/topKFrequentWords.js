/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
//https://leetcode.com/problems/top-k-frequent-words/
// Rethen the k most frequent strings. And in an lexicographical order.
// If k is 2, then return the most frequent 2 strings.
// If 2 strings in same frequent, then compare it character, a goes first then b. b goes first then c, so on...

// My solution, worked well
var topKFrequent = function (words, k) {
  let memo = {}
  let res = []
  for (let val of words) {
    memo[val] = memo[val] + 1 || 1
  }

  // res is an array contains [string, frequency]
  res = Object.entries(memo).sort(([a, fx], [b, fy]) => {
    if (fx > fy) return -1 // if the frequency greater, then it goes left.
    if (fx < fy) return 1 // if the frequency smaller, then it goes right
    if (fx === fy) { // If both frequency is same, then compare its char.
      if (a < b) return -1 // If the char is closer to a, it go left, 
    } else {
      return 1
    }

  })

  res.length = k
  res.map((i) => res.push(i[0]))
  return res
};

// Neat version
var topKFrequent = function (words, k) {
  let memo = {}
  let res = []
  for (let val of words) memo[val] = memo[val] + 1 || 1

  res = Object.entries(memo).sort(([a, fx], [b, fy]) => {
    if (fx > fy || fx === fy && a < b) return -1
    return 1
  })

  res.length = k
  return res.map((i) => i[0])
};