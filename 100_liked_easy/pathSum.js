/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
const binaryTree = require('../binaryTreeMaker')

let tree = binaryTree([1, 2])

var hasPathSum = function (root, targetSum) {
  return call(root, 0)


  function call(curr, sum) {

    if (!curr) return false
    sum = curr.val + sum
    if (!curr.left && !curr.right) return sum === targetSum

    return call(curr.left, sum) || call(curr.right, sum)
  }
};

console.log(
  hasPathSum(tree, 11)
)

// Other solution 
// from https://leetcode.com/voltaaage/
var hasPathSum = function (root, sum) {
  return dfs(root, 0, sum);
};

var dfs = function (curr, currentSum, targetSum) {
  if (!curr) {
    return false;
  }

  currentSum += curr.val;

  if (curr.left === null && curr.right === null) {
    return currentSum === targetSum;
  }

  return dfs(curr.left, currentSum, targetSum) || dfs(curr.right, currentSum, targetSum);
}