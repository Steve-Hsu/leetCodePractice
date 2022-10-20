//https://leetcode.com/problems/minimum-depth-of-binary-tree/

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
 * @return {number}
 */

// My solution
var minDepth = function (root) {
  if (!root) return 0
  if (!root.left && !root.right) return 1
  return Math.min(bfs(root.left, 1), bfs(root.right, 1))

  function bfs(node, count) {
    if (!node) return Infinity
    if (!node.left && !node.right) return count + 1
    return Math.min(bfs(node.left, count + 1), bfs(node.right, count + 1))
  }
};

var minDepth = function (root) {
  if (!root) return 0
  return bfs(root, 1)

  function bfs(node, count) {
    if (!node) return Infinity
    if (!node.left && !node.right) return count
    return Math.min(bfs(node.left, count + 1), bfs(node.right, count + 1))
  }
};


// Solution from https://leetcode.com/StefanPochmann/
// It use the feature of the binary tree, when the node is empty, 0 will be returned. as the default value of empty node is 0
var minDepth = function (root) {
  if (!root) return 0
  var L = minDepth(root.left), R = minDepth(root.right)
  return 1 + (Math.min(L, R) || Math.max(L, R))
};