/**
 * @param {string} s
 * @return {number}
 */
// My solution
var romanToInt = function (s) {
  let idx = s.length - 1
  let sum = 0
  let pre = ""
  let dic = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  }
  while (idx > -1) {
    let Rom = s[idx]
    sum = sum + dic[Rom]
    if (Rom === "I") {
      if (pre === "V" || pre === "X") {
        sum = sum - 2
      }
    }
    if (Rom === "X") {
      if (pre === "L" || pre === "C") {
        sum = sum - 20
      }
    }
    if (Rom === "C") {
      if (pre === "D" || pre === "M") {
        sum = sum - 200
      }
    }
    pre = Rom
    idx--
  }
  return sum

};

var romanToInt = function (s) {
  let length = s.length
  let idx = 0
  let sum = 0
  let dic = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  }
  while (idx < length) {
    let Rom = s[idx]
    let next = s[idx + 1]
    sum = sum + dic[Rom]

    if (Rom === "I") {
      if (next === "V" || next === "X") {
        sum = sum - 2
      }
    }
    if (Rom === "X") {
      if (next === "L" || next === "C") {
        sum = sum - 20
      }
    }
    if (Rom === "C") {
      if (next === "D" || next === "M") {
        sum = sum - 200
      }
    }

    idx++
  }
  return sum

};


// Other solution 
// from https://leetcode.com/jeantimex/
// The condition "prev >= curr" is very smart.
const romanToInt = s => {
  if (!s || s.length === 0) {
    return 0;
  }

  const map = new Map([['I', 1], ['V', 5], ['X', 10], ['L', 50], ['C', 100], ['D', 500], ['M', 1000]]);

  let i = s.length - 1;
  let result = map.get(s[i]);

  while (i > 0) {
    const curr = map.get(s[i]);
    const prev = map.get(s[i - 1]);

    if (prev >= curr) {
      result += prev;
    } else {
      result -= prev;
    }

    i--;
  }

  return result;
};


// Same logic, but more neat
// from https://leetcode.com/garyguan0713/
symbols = {
  "I": 1,
  "V": 5,
  "X": 10,
  "L": 50,
  "C": 100,
  "D": 500,
  "M": 1000
};

var romanToInt = function (s) {
  value = 0;
  for (let i = 0; i < s.length; i += 1) {
    symbols[s[i]] < symbols[s[i + 1]] ? value -= symbols[s[i]] : value += symbols[s[i]]
  }
  return value
};