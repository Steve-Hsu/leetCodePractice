/**
 * @param {string} sentence
 * @return {boolean}
 */
// My solution, works but slow
var checkIfPangram = function (s) {
  if (s.length < 26) return false
  let downLimit = 97
  let upLimit = downLimit + 25
  let result = []
  for (let i = 0; i < s.length; i++) {
    if (s[i].charCodeAt() > upLimit || s[i].charCodeAt() < downLimit) return false
    result[s[i].charCodeAt() - 97] = true
  }
  for (let i = 0; i < 26; i++) {
    if (!result[i]) return false
  }
  return true
};


var checkIfPangram = function (s) {
  let set = new Set()
  for (let i = 0; i < s.length; i++) {
    if (s[i].charCodeAt() > 122 || s[i].charCodeAt() < 97) return false
    set.add(s[i])
  }
  return set.size === 26
};

var checkIfPangram = function (s) {
  let set = new Set()
  for (let i = 0; i < s.length; i++) set.add(s[i])
  return set.size === 26
};

// My Best wolution 
var checkIfPangram = (s) => new Set(s).size === 26;
