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
 * @return {boolean}
 */
//https://leetcode.com/problems/balanced-binary-tree/
// After ref to other solution, My solution finally worked !!
var isBalanced = function (root) {
  return dfs(root, 1)

  function dfs(node, count) {
    if (!node) return count
    let a = dfs(node.left, count + 1)
    let b = dfs(node.right, count + 1)
    if (Math.abs(a - b) > 1) return false // Keypoint is here. You need check each time in every traversal deep down the tree
    return Math.max(a, b)
  }
}

// LeetCode solution 
var isBalanced = function (root) {
  function height(node) {
    if (!node) return -1
    return 1 + Math.max(height(node.left), height(node.right))
  }

  if (!root) return true
  return Math.abs(height(root.left) - height(root.right)) < 2 && isBalanced(root.left) && isBalanced(root.right)
}

// Or

var isBalanced = function (root) {
  function height(node, count) {
    if (!node) return count
    return Math.max(height(node.left, count + 1), height(node.right, count + 1))
  }

  if (!root) return true
  return Math.abs(height(root.left, 0) - height(root.right, 0)) < 2 && isBalanced(root.left) && isBalanced(root.right)
}



// One of solution
// But i still can't understand!!
var isBalanced = function (root) {
  return getHeight(root) != -1;

  function getHeight(node) {
    if (!node) return 0

    let left = getHeight(node.left)
    let right = getHeight(node.right)

    if (left == -1 || right == -1 || Math.abs(left - right) > 1) return -1
    return Math.max(left, right) + 1
  }
};