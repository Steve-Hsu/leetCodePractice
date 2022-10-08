const binaryTreeMaker = require('../binaryTreeMaker');

const arr = [4, -7, -3, null, null, -9, -3, 9, -7, -4, null, 6, null, -6, -6, null, null, 0, 6, 5, null, 9, null, null, -1, -4, null, null, null, -2]

const bst = binaryTreeMaker(arr);

// This code is wrong, it may causes "Time Limit Exceeded"
var diameterOfBinaryTree = function (root) {
  let diameter = 0

  const longestPath = (root) => {
    if (root == null) return 0;
    diameter = Math.max(diameter, longestPath(root.left) + longestPath(root.right))
    return Math.max(longestPath(root.left), longestPath(root.right)) + 1;
  }
  longestPath(root);
  return diameter
}

console.log(
  diameterOfBinaryTree(bst)
)

// Correct Code from LeetCode solution"
const diameterOfBinaryTree_2 = (root) => {
  let diameter = 0;

  const longestPath = (node) => {
    if (node == null) return 0;
    let leftPath = longestPath(node.left);
    let rightPath = longestPath(node.right);

    diameter = Math.max(diameter, leftPath + rightPath);
    return Math.max(leftPath, rightPath) + 1;
  }


  longestPath(root);
  return diameter

}
console.log(
  diameterOfBinaryTree_2(bst)
)