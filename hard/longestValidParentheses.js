/**
 * @param {string} s
 * @return {number}
 */

// let S = "()(()" // return 2
// let S = "(()" // return 2
// let S = ")()())" // Return 4
// let S = "())(())" // return 4
// let S = ")(" // return 0
// let S = "()" // return 2
// let S = "()()" // return 4
let S = ")(()())(())()" // return 12
// let S = ")(((((()())()()))()(()))(" // return 22
// let S = "(()()(())((" //8

// let S = "())()"// 2
// let S = "()())"// 4
// let S = "())())"//  2
// let S = "()(()(" // 2


// my solution, not wokred, A little push this code may worked, 
// var longestValidParentheses_2 = function (s) {
//   let stack = []
//   let lastIdx = 0
//   let max = 0
//   let checkArr = []

//   for (let i = 0; i < s.length; i++) {
//     // console.log(i, s[i], "max :", max, "stack.length", stack.length)
//     if ((s[i] === "(")) {
//       stack.push(i)
//       checkArr.push(i)
//     }

//     if (s[i] === ")" && stack.length) {
//       stack.pop()
//       checkArr.pop()
//     }
//     else if (s[i] === ")" && stack.length === 0) {
//       checkArr.push(i)
//     }
//   }
//   console.log(checkArr)


//   let b = s.length - 1
//   if (!checkArr.length && !stack.length) return s.length
//   if (checkArr.length === 1 && checkArr[checkArr.length - 1]) return checkArr[checkArr.length - 1]
//   for (let i = checkArr.length - 1; i >= 0; i--) {
//     let a = checkArr[i]
//     b = a ? b - 1 : b
//     // b = b - 1
//     console.log("a", a, "b", b, "i", i)
//     let temp = b - a
//     max = Math.max(max, temp)
//     b = a
//     console.log("temp", temp)
//   }


//   // let lastCheck = (s.length - 1) - lastIdx
//   // max = Math.max(max, lastCheck)
//   max = max === 1 ? 0 : max
//   return max
// }
console.log(
  longestValidParentheses(S)
)

// My solution Worked but slow
var longestValidParentheses = function (s) {
  // Worked function_ my solution 
  let stack = []
  let res = []

  for (let i = 0; i < s.length; i++) {
    if ((s[i] === "(")) {
      stack.push(i) // remeber index in stack
      res.push(0)
    }
    if ((s)[i] === ")") {
      let l = stack.pop()
      if (l >= 0) {
        res[i] = 1;
        res[l] = 1;
      } else {
        res[i] = 0
      }
    }
  }

  let max = 0
  let sum = 0
  for (num of res) {
    if (num) {
      sum = sum + 1
      max = Math.max(sum, max)
    } else {

      sum = 0
    }
  }

  return max
}

// Leetcode solution, without extra space
// Runs so fast / https://leetcode.com/problems/longest-valid-parentheses/solution/
var longestValidParentheses_leetCode = function (s) {
  let left = 0, right = 0, maxlength = 0;

  // Check from left to right, if left equals to right, then the maxlength + 2.
  // If the right greater then left, before traversing all the unit, turn left and right to zero
  // becase there no possiple, the parentheses will be valid when right more then left.
  // Set the max length as maxlength
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      left++;
    } else {
      right++;
    }
    if (left === right) {
      maxlength = Math.max(maxlength, 2 * right);
    } else if (right >= left) {
      left = right = 0;
    }
  }

  // Do the same thing as above, but we traverse from right to left
  // And this time we forcuse on the right parenthese.
  // So we need make the left and right as default to be 0
  left = right = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === "(") {
      left++;
    } else {
      right++;
    }
    if (left === right) {
      maxlength = Math.max(maxlength, 2 * left);
    } else if (left >= right) {
      left = right = 0;
    }
  }
  return maxlength
}