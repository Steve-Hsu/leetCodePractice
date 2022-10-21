/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
// My 2 pointers solution
var reversePrefix = function (word, ch) {
  let r = word.indexOf(ch)
  word = word.split("")
  for (let l = 0; l < r; l++, r--)
    [word[l], word[r]] = [word[r], word[l]]
  return word.join("")
};

// More neat
var reversePrefix = function (word, ch) {
  w = word.split("")
  for (let l = 0, r = w.indexOf(ch); l < r; l++, r--)
    [w[l], w[r]] = [w[r], w[l]]
  return w.join("")
};