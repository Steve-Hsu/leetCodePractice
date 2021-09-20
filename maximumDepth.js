const makeTreeWithArray = require('./binaryTreeMaker');

const arr = [3, 9, 20, null, null, 15, 7]
// const arr = [1]
const root = makeTreeWithArray(arr);

// My solution with recursion, it works, but quite slow !
var maxDepth = function (root) {
  let level = 0
  const helper = (root, level) => {
    if (!root) {
      // console.log(level) 
      return level
    } else {
      level = level + 1;
      // console.log(level)
      return Math.max(helper(root.left, level), helper(root.right, level))
    }
  }
  return helper(root, level)
};
console.log(
  "My solution",
  maxDepth(root)
)

// Similar and more elegant from NileshSaini from https://leetcode.com/NileshSaini_99/
const maxDepth_2 = (root) => {
  const helper = (root, level) => {
    if (!root) return level;
    return Math.max(helper(root.left, level + 1), helper(root.right, level + 1));
  }
  return helper(root, 0)
}
console.log(
  "MaxDepth_2",
  maxDepth_2(root)
);

// Recursive_1, leetCode approach_1
const recursiveMaxDepth = (root) => {
  if (!root) {
    return 0;
  } else {
    let left_height = recursiveMaxDepth(root.left);
    let right_height = recursiveMaxDepth(root.right);
    return Math.max(left_height, right_height) + 1;
  }
}

console.log(
  "Recursion_1",
  recursiveMaxDepth(root)
)

// Recursive_2 from WalterInSH https://leetcode.com/WalterInSH/
const recursiveMaxDepth_2 = (root) => {
  if (root === undefined || root === null) {
    return 0;
  }
  return Math.max(recursiveMaxDepth_2(root.left), recursiveMaxDepth_2(root.right)) + 1;
}
console.log(
  "Recursion_2",
  recursiveMaxDepth_2(root)
)