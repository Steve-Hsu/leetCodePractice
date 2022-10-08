/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

// Solution_1 : 
// https://leetcode.com/problems/regular-expression-matching/discuss/2383634/Fastest-Solution-Explained0ms100-O(n)time-complexity-O(n)space-complexity

const isMatch = (string, pattern) => {
  // early return when pattern is empty
  if (!pattern) {
    // returns true when string and pattern are empty
    // returns false when string contains chars with empty pattern
    return !string;
  }

  // check if the current char of the string and pattern match when the string has chars
  const hasFirstCharMatch = Boolean(string) && (pattern[0] === '.' || pattern[0] === string[0]);

  // track when the next character * is next in line in the pattern
  if (pattern[1] === '*') {
    // if next pattern match (after *) is fine with current string, then proceed with it (s, p+2).  That's because the current pattern may be skipped.
    // otherwise check hasFirstCharMatch. That's because if we want to proceed with the current pattern, we must be sure that the current pattern char matches the char
    // If hasFirstCharMatch is true, then do the recursion with next char and current pattern (s+1, p).  That's because current char matches the pattern char. 
    return (
      isMatch(string, pattern.slice(2)) ||
      (hasFirstCharMatch && isMatch(string.slice(1), pattern))
    );
  }

  // now we know for sure that we need to do 2 simple actions
  // check the current pattern and string chars
  // if so, then can proceed with next string and pattern chars (s+1, p+1)
  return hasFirstCharMatch ? isMatch(string.slice(1), pattern.slice(1)) : false;
};

let S = "aaaba"
let P = "a*abac*"
console.log(
  isMatch(S, P)
)

// Solution_2 : 
// (this faster)----------------------------------------------------------------------------------------
// https://leetcode.com/problems/regular-expression-matching/discuss/680544/JavaScript-Clean-Recursive-DP-Memoization-Beats-88

var isMatch_2 = function (s, p) {
  const memo = new Map();

  function recurse(sIdx, pIdx) {
    if (memo.has(`${sIdx}-${pIdx}`)) return memo.get(`${sIdx}-${pIdx}`);
    if (sIdx === s.length && pIdx === p.length) return true;
    if (sIdx > s.length) return false;

    let result = null;

    if (p[pIdx] === s[sIdx] || p[pIdx] === '.') { // currently passed, then check next pattern in advance
      if (p[pIdx + 1] === '*') result = recurse(sIdx, pIdx + 2) || recurse(sIdx + 1, pIdx);
      // before the ||
      // Trim the * and preceding char to see the result, if there are no any * or length of string and patter not match it will return false, otherwise it returns true.
      // After || 
      // Delete 1 item of the string, and keep use the current pattern for match check.  
      else result = recurse(sIdx + 1, pIdx + 1);
    } else {
      if (p[pIdx + 1] === '*') result = recurse(sIdx, pIdx + 2);
      else result = false;
    }
    memo.set(`${sIdx}-${pIdx}`, result);
    return result;
  }
  return recurse(0, 0);
};



// My test_1 => not worked -----------------------------------------------------
const reverse = (input) => {
  return [...input].reverse().join("").split("")
}


var isMatch_3 = function (s, p) {
  // if (!s.length || !p.length) return false;
  // if (p.startsWith(".") && p.endsWith("*")) return true;
  // if (!p.includes("*") && p.length !== s.length) return false;
  // const sArr = reverse(s);
  // const pArr = reverse(p);
  // let idxP = 0;
  // let currP = "";
  // let wildCatMatch = false;
  // // if (pArr[idxP] === "*") return false

  // for (let idxS = 0; idxS < s.length; idxS++) {
  //   if (!wildCatMatch) {
  //     currP = pArr[idxP]
  //     ++idxP
  //     if (sArr[idxS] === currP || currP === ".") continue // go normal loop 

  //     if (currP === "*") {
  //       wildCatMatch = true
  //       currP = pArr[idxP]
  //       ++idxP
  //     }

  //     if (sArr[idxS] === currP) {
  //       continue
  //       // next loop to wildCat true
  //     } else {
  //       wildCatMatch = false
  //       currP = pArr[idxP]
  //       ++idxP;
  //     }

  //     if (sArr[idxS] !== currP) return false
  //     // go normal loop 
  //   }
  //   else {
  //     if (sArr[idxS] === currP) {
  //       continue
  //       // next loop to wildCat true
  //     } else {
  //       wildCatMatch = false
  //       currP = pArr[idxP]
  //       ++idxP;
  //     }

  //     if (sArr[idxS] !== currP) return false
  //   }

  // }
  // return true
};


// My test_2 => not worked recursion-----------------------------------------------------
var isMatch_4 = function (s, p) {
  // if (!s.length || !p.length) return false;
  // if (p.startsWith(".") && p.endsWith("*")) return true;
  // if (!p.includes("*") && p.length !== s.length) return false;
  // const sArr = s.split("");
  // const pArr = p.split("");

  // const contineue = (sIdx, pIdx, previousMatched) => {
  //   // console.log("string", sArr[sIdx], "idx", sIdx);
  //   // console.log("pattern", pArr[pIdx], "idx", pIdx);
  //   // console.log("yes")
  //   if (sIdx >= sArr.length && pIdx >= pArr.length) return true
  //   if (!sArr.length || !pArr.length) return false;

  //   if (sArr[sIdx] === pArr[pIdx] || pArr[pIdx] === ".") return contineue(sIdx + 1, pIdx + 1, pArr[pIdx]);

  //   if (pArr[pIdx] === "*") {
  //     if (sArr.slice(sIdx).length === pArr.slice(pIdx).length) {
  //       if (sArr[sIdx] === previousMatched) return contineue(sIdx + 1, pIdx + 1, sArr[sIdx]);
  //       else return false;
  //     } else {
  //       if (sArr[sIdx] === previousMatched) return contineue(sIdx + 1, pIdx, sArr[sIdx]);
  //       else return contineue(sIdx, pIdx + 1, pArr[pIdx]);
  //     }
  //   }

  //   if (sArr[sIdx] !== pArr[pIdx] && pArr[pIdx + 1] !== "*") return false;


  //   return contineue(sIdx, pIdx + 1, pArr[pIdx]);
  //   // if (sIdx > sArr.length) return true
  // }

  // return contineue(0, 0, "", false)
};

console.log(
  isMatch_4(S, P)
)