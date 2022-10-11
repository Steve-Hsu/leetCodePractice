/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  if (Number(a) + Number(b) === 0) return "0"

  a = a.split("").reverse()
  b = b.split("").reverse()
  let length = Math.max(a.length, b.length)
  let res = ""
  let carry = 0

  for (let i = 0; i < length; i++) {
    let A = Number(a[i]) || 0
    let B = Number(b[i]) || 0


    if (A + B + carry == 2) {
      carry = 1
      res = "0" + res
    } else if (A + B + carry == 3) {
      carry = 1
      res = "1" + res
    }
    else if (A + B + carry === 0) {
      carry = 0
      res = "0" + res
    }
    else {
      carry = 0
      res = "1" + res
    }

  }
  if (carry) res = "1" + res

  return res
};

//
var addBinary = function (a, b) {
  if (Number(a) + Number(b) === 0) return "0"

  a = a.split("").reverse()
  b = b.split("").reverse()
  let length = Math.max(a.length, b.length)
  let res = ""
  let carry = 0

  for (let i = 0; i < length; i++) {
    let A = Number(a[i]) || 0
    let B = Number(b[i]) || 0
    let check = A + B + carry

    switch (check) {
      case 2:
        carry = 1
        res = "0" + res
        break;
      case 3:
        carry = 1
        res = "1" + res
        break;
      case 0:
        carry = 0
        res = "0" + res
        break;
      default:
        carry = 0
        res = "1" + res
    }
  }
  if (carry) res = "1" + res

  return res
};

var addBinary = function (a, b) {
  if (Number(a) + Number(b) === 0) return "0"

  a = a.split("").reverse()
  b = b.split("").reverse()
  let length = Math.max(a.length, b.length)
  let res = ""
  let carry = 0

  for (let i = 0; i < length; i++) {
    let A = Number(a[i]) || 0
    let B = Number(b[i]) || 0

    if (A + B + carry == 2) {
      carry = 1
      res = "0" + res
    }
    else if (A + B + carry == 3) {
      carry = 1
      res = "1" + res
    }
    else if (A + B + carry === 0) {
      carry = 0
      res = "0" + res
    }
    else {
      carry = 0
      res = "1" + res
    }

  }
  if (carry) res = "1" + res

  return res
};

// Other solution 
// from https://leetcode.com/thepatriot/
//The idea is to use inputs, a and b to build two binary literals. 
//Calculating the sum is done by calling the BigInt function on our binary literals, 
//adding them together and returning the sum with a call to the toString method with 2 as the argument, since we are working with binary numbers.
var addBinary = function (a, b) {
  const aBin = `0b${a}`
  const bBin = `0b${b}`
  const sum = BigInt(aBin) + BigInt(bBin)
  return sum.toString(2)
};

// From https://leetcode.com/osdevisnot/
let addBinary = (a, b) => {
  // Truth Table
  // 1st + 2nd + carry = sum, new carry, decimal sum
  //   0 +  0  + 0 = 0, 0 (0)
  //   0 +  0  + 1 = 1, 0 (1)
  //   0 +  1  + 1 = 0, 1 (2)
  //   1 +  1  + 1 = 1, 1 (3)

  let carry = 0;
  let result = '';

  let len1 = a.length - 1;
  let len2 = b.length - 1;

  for (; len1 >= 0 || len2 >= 0 || carry > 0; len1--, len2--) {
    let sum = (+a[len1] || 0) + (+b[len2] || 0) + carry;
    if (sum > 1) {
      sum = sum % 2;
      carry = 1;
    } else {
      carry = 0;
    }
    result = `${sum}${result}`;
  }
  return result;
};