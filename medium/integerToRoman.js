/**
 * @param {number} num
 * @return {string}
 */

// My solution
var intToRoman = function (num) {
  let s = String(num)
  let digits = s.length + 1
  let res = []
  while (digits--) {
    let romInt = ""
    let n = Number(s[0])
    if (digits == 4) {
      romInt = Array(n).fill("M")
    }
    if (digits == 3 && n) {
      if (n <= 3) romInt = Array(n).fill("C")
      else if (n == 4) romInt = ["CD"]
      else if (n == 9) romInt = ["CM"]
      else {
        n = n - 5
        romInt = Array(n).fill("C")
        romInt.unshift("D")
      }
    }
    if (digits == 2 && n) {
      if (n <= 3) romInt = Array(n).fill("X")
      else if (n == 4) romInt = ["XL"]
      else if (n == 9) romInt = ["XC"]
      else {
        n = n - 5
        romInt = Array(n).fill("X")
        romInt.unshift("L")
      }
    }
    if (digits == 1 && n) {
      if (n <= 3) romInt = Array(n).fill("I")
      else if (n == 4) romInt = ["IV"]
      else if (n == 9) romInt = ["IX"]
      else {
        n = n - 5
        romInt = Array(n).fill("I")
        romInt.unshift("V")
      }
    }

    s = s.slice(1)
    res = [...res, ...romInt]
  }
  return res.join("")
};


// My solution_2
// This version runs slower than the array versoin above.
var intToRoman = function (num) {
  let s = String(num)
  let digits = s.length + 1
  let res = []
  while (digits--) {
    let romInt = ""
    let n = Number(s[0])
    if (digits == 4) {
      romInt = Array(n).fill("M").join("")
    }
    if (digits == 3 && n) {
      if (n <= 3) romInt = Array(n).fill("C").join("")
      else if (n == 4) romInt = "CD"
      else if (n == 9) romInt = "CM"
      else {
        n = n - 5
        romInt = Array(n).fill("C").join("")
        romInt = "D" + romInt
      }
    }
    if (digits == 2 && n) {
      if (n <= 3) romInt = Array(n).fill("X").join("")
      else if (n == 4) romInt = "XL"
      else if (n == 9) romInt = "XC"
      else {
        n = n - 5
        romInt = Array(n).fill("X").join("")
        romInt = "L" + romInt
      }
    }
    if (digits == 1 && n) {
      if (n <= 3) romInt = Array(n).fill("I").join("")
      else if (n == 4) romInt = "IV"
      else if (n == 9) romInt = "IX"
      else {
        n = n - 5
        romInt = Array(n).fill("I").join("")
        romInt = "V" + romInt
      }
    }

    s = s.slice(1)
    res = [...res, romInt]
  }
  return res.join("")
};

// leetCode solution
// Notice: the index in the return we use bitwise or "|", that's becuase some result could be float number, 
// And array don't take an float as index, the bitwise or can solve the problem. If the result is float, it will return next number
// Here we set the next number as zero "0"
function intToRoman(num) {
  const thousands = ["", "M", "MM", "MMM"];
  const hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  const tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  const ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  return thousands[num / 1000 | 0] + hundreds[num % 1000 / 100 | 0] + tens[num % 100 / 10 | 0] + ones[num % 10 | 0];
}



// Solution from https://leetcode.com/kometa_andron/
// Reduce version
function intToRoman(num) {
  const map = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
  return Object.entries(map).reduce((result, [letter, n]) => {
    result += letter.repeat(Math.floor(num / n));
    num %= n;
    return result;
  }, '');
}
// ForEach version
function intToRoman(num) {
  const map = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
  let result = '';
  Object.entries(map).forEach(([letter, n]) => {
    result += letter.repeat(Math.floor(num / n));
    num %= n;
  });
  return result;
}