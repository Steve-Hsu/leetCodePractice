// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

/**
 * @param {string} s
 * @return {boolean}
 */

const testString = "([]){}"

// @  My Solution_1
// I submit solution_1 to leetCode
const isValid_mySolution_1 = function (s) {
  // Check the length of string, if it's an odd return invalid
  if (s.length % 2 !== 0) return false;

  let arr = s.split("");
  let string = ["(", ")", "[", "]", "{", "}"];
  let checkNumber = string.map((s) => {
    return arr.filter((i) => i === s).length;
  })
  let idx = 0
  // Check if the number of each type of paranthesis is not mached pair to pair, return invalid
  for (let i = 0; i < string.length / 2; i++) {
    if (checkNumber[idx] !== checkNumber[idx + 1]) return false;
    idx += 2
  }

  let mapArr = []

  for (i in arr) {
    if (
      mapArr[mapArr.length - 1] + arr[i] === "()" ||
      mapArr[mapArr.length - 1] + arr[i] === "{}" ||
      mapArr[mapArr.length - 1] + arr[i] === "[]"
    ) {
      mapArr.pop();
    } else if (
      arr[i] === "(" ||
      arr[i] === "{" ||
      arr[i] === "["
    ) {
      mapArr.push(arr[i])
    }
  }

  if (mapArr.length > 0) return false
  // console.log(mapArr)
  return true
};

console.log(isValid_mySolution_1(testString))

// @  My Solution_2
const isValid_mySolution_2 = function (s) {
  // Check the length of string, if it's an odd return invalid
  if (s.length % 2 !== 0) return false;
  let arr = s.split("");
  let mapArr = []

  for (i in arr) {
    if (
      mapArr[mapArr.length - 1] + arr[i] === "()" ||
      mapArr[mapArr.length - 1] + arr[i] === "{}" ||
      mapArr[mapArr.length - 1] + arr[i] === "[]"
    ) {
      mapArr.pop();
    } else if (
      arr[i] === "(" ||
      arr[i] === "{" ||
      arr[i] === "["
    ) {
      mapArr.push(arr[i])
    }
  }

  if (mapArr.length > 0) return false
  // console.log(mapArr)
  return true
};

console.log(isValid_mySolution_2(testString))


// @  My Solution_3
// This solution can take with other string like "[(eee)]", in solution_3, that will be considered as True.
const isValid_mySolution_3 = function (s) {
  // Check the length of string, if it's an odd return invalid
  let arr = s.split("");
  let string = ["(", ")", "[", "]", "{", "}"];
  let checkNumber = string.map((s) => {
    return arr.filter((i) => i === s).length;
  })
  let idx = 0
  // Check if the number of each type of paranthesis is not mached pair to pair, return invalid
  for (let i = 0; i < string.length / 2; i++) {
    if (checkNumber[idx] !== checkNumber[idx + 1]) return false;
    idx += 2
  }

  let mapArr = []

  for (i in arr) {
    if (
      mapArr[mapArr.length - 1] + arr[i] === "()" ||
      mapArr[mapArr.length - 1] + arr[i] === "{}" ||
      mapArr[mapArr.length - 1] + arr[i] === "[]"
    ) {
      mapArr.pop();
    } else if (
      arr[i] === "(" ||
      arr[i] === "{" ||
      arr[i] === "["
    ) {
      mapArr.push(arr[i])
    }
  }

  if (mapArr.length > 0) return false
  // console.log(mapArr)
  return true
};

console.log(isValid_mySolution_3(testString))