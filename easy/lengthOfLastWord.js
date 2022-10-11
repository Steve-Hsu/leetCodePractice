/**
 * @param {string} s
 * @return {number}
 */
// My solution
var lengthOfLastWord = function (s) {
  if (s.length === 1) return 1
  let idx = s.length
  let meetChar = false
  let spaceBeforeMeetChar = 0
  while (idx--) {
    if (s[idx] !== " ") meetChar = true
    if (!meetChar) spaceBeforeMeetChar++
    if (s[idx] === " " && meetChar) return s.length - idx - spaceBeforeMeetChar - 1
  }
  return s.length - spaceBeforeMeetChar
};

var lengthOfLastWord = function (s) {
  if (s.length === 1) return 1
  let idx = s.length
  let res = ""
  while (idx--) {
    if (s[idx] !== " ") {
      res = res + s[idx]
    } else {
      if (res.length > 0) return res.length
    }
  }
  return res.length
};

// My best solution
var lengthOfLastWord = function (s) {
  let idx = s.length
  let res = 0
  while (idx--) {
    if (s[idx] !== " ") res++
    if (s[idx] === " " && res > 0) return res
  }
  return res
};

// This one is in same logic as above, but seams faster
var lengthOfLastWord = function (s) {
  let idx = s.length
  let res = 0
  while (idx--) {
    if (s[idx] !== " ") res++
    else if (res > 0) return res
  }
  return res
};

var lengthOfLastWord = function (s) {
  let idx = s.length, res = 0
  while (idx--)
    if (s[idx] !== " ") res++
    else if (res > 0) return res
  return res
};
