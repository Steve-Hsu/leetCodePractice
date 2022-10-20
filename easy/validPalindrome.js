/**
 * @param {string} s
 * @return {boolean}
 */
//https://leetcode.com/problems/valid-palindrome/
// My solution
var isPalindrome = function (s) {
  let str = s.split(/[^a-z0-9]/gi).join("").toLowerCase()
  let strRev = str.split("").reverse().join("").toLowerCase()
  return str === strRev

};

// Neat
var isPalindrome = function (s) {
  let str = s.toLowerCase().replace(/[^a-z0-9]/gi, "")
  let strRev = str.split("").reverse().join("")
  return str === strRev

};



// Solution from https://leetcode.com/ui-widgets-js/
// Easy, neat and fast!
const isPalindrome = s => {
  s = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
  for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
    if (s.charAt(i) !== s.charAt(j)) return false;
  }
  return true;
}


// Solution from https://leetcode.com/closure_000/
// Same logic as mine
var isPalindrome = function (s) {
  s = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  return s === s.split("").reverse().join("");
};