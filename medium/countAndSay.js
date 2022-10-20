/**
 * @param {number} n
 * @return {string}
 */
//https://leetcode.com/problems/count-and-say/
// My solution
var countAndSay = function (n) {
  let idx = 1
  let temp = ""
  let count = 0
  let res = "1"

  while (idx++ < n) {
    for (let i = 0; i < res.length; i++) {
      count += 1
      if (res[i] != res[i + 1] || i + 1 === res.length) {
        temp = temp + count + res[i]
        count = 0
        tmep = ""
      }
    }
    res = temp
    temp = ""
  }
  return res
};

// Neet
var countAndSay = function (n) {
  let count = 0
  let res = "1"

  while (--n) {
    let temp = ""

    for (let i = 0; i < res.length; i++) {
      count += 1
      if (res[i] != res[i + 1] || i + 1 === res.length) {
        temp = temp + count + res[i]
        count = 0
      }
    }
    res = temp
  }
  return res
};


// Best solution from https://leetcode.com/iv_babkov/
// The .match(/1+|2+|3+/g) will get a 1, 2, or 3 substring when it appears as an series, for exmaple 11233411, => [11, 2, 33, 11]
// The reduce will count the length of each item in the retured array and combine it as a string
var countAndSay = function (n) {
  if (n === 1) return '1';

  return countAndSay(n - 1)
    .match(/1+|2+|3+/g)
    .reduce((acc, nums) => acc += `${nums.length}${nums[0]}`, '')
};


// Solution from https://leetcode.com/loia5tqd001/
var countAndSay = function (n) {
  let res = '1';
  for (let i = 1; i < n; i++) {
    // let say at the beginning of the loop we have '11222333' (two 1s three 2s three 3s)

    res = res.replace(/((\d)\2*)/g, '$1-')
      // after the replacement we have: '11-222-333-'
      .split('-')
      // we have: [ '11', '222', '333', '' ]
      .map(str => str ? `${str.length}${str[0]}` : '')
      // [ '21', '32', '33', '' ]
      .join('');
    // '213232' (what we want)
  }
  return res;
};