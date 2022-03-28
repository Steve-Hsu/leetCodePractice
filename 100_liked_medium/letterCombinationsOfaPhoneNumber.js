/**
 * @param {string} digits
 * @return {string[]}
 */
//https://leetcode.com/problems/letter-combinations-of-a-phone-number/
// My solustion
var letterCombinations = function (digits) {
  if (digits.length === 0) return []
  const m = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"]
  };
  const strings = digits.split('')
  if (digits.length === 1) return m[strings[0]]
  // if(digits.length === 2) return m[0].map((i,idx)=>i+m[1][idx])

  let arr = []
  console.log(typeof m[strings[0]])
  console.log("the strings", strings)
  for (i of m[strings[0]]) {
    for (i2 of m[strings[1]]) {
      if (m[strings[2]]) {
        for (i3 of m[strings[2]]) {
          if (m[strings[3]]) {
            for (i4 of m[strings[3]]) {
              arr.push(i + i2 + i3 + i4)
              if (arr.length === m[strings[0]].length * m[strings[1]].length * m[strings[2]].length * m[strings[3]].length) return arr
            }

          } else {
            arr.push(i + i2 + i3)
            if (arr.length === m[strings[0]].length * m[strings[1]].length * m[strings[2]].length) return arr
          }
        }
      } else {
        arr.push(i + i2)
        if (arr.length === m[strings[0]].length * m[strings[1]].length) return arr
      }

    }
  }
};