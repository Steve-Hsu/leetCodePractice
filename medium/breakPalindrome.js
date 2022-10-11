/**
 * @param {string} palindrome
 * @return {string}
 */
// My solution 1
var breakPalindrome = function (palindrome) {
  let p = palindrome
  if (p.length === 1) return ""

  let mid = Math.floor(p.length / 2)

  for (let i = 0; i < mid; i++) {
    let char = p.charAt(i)
    if (char != "a") {
      return p.substring(0, i) + "a" + p.substring(i + 1, p.length)
    }
  }
  return p.substring(0, p.length - 1) + "b"
};


// Neat Version
var breakPalindrome = function (p) {
  if (p.length === 1) return ""

  for (let i = 0; i < Math.floor(p.length / 2); i++) {
    if (p[i] != "a") return p.substring(0, i) + "a" + p.substring(i + 1, p.length)
  }
  return p.substring(0, p.length - 1) + "b"
};