/**
 * @param {number[]} digits
 * @return {number[]}
 */

// My solution, worked but not so fast
var plusOne = function (digits) {
  let idx = digits.length - 1
  while (idx >= 0) {
    let digit = digits[idx] + 1
    if (digit > 9) {
      digits[idx] = 0
      --idx
    } else {
      digits[idx] = digit
      return digits
    }
  }
  return [1, ...digits]
};

// Neat Version, but seems a little slower than above
var plusOne = function (digits) {
  let idx = digits.length
  while (--idx >= 0) {
    digits[idx]++
    if (digits[idx] > 9) digits[idx] = 0
    else return digits
  }
  return [1, ...digits]
};


console.log(
  plusOne([9])
)

// Other solution 
// Same lagic as mine, but more neat
var plusOne = function (digits) {
  for (var i = digits.length - 1; i >= 0; i--) {
    if (++digits[i] > 9) digits[i] = 0;
    else return digits;
  }
  digits.unshift(1);
  return digits;
};