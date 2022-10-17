/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// My solution
var isSameTree = function (p, q) {
  return bfs(p, q)
  function bfs(node1, node2) {
    if (node1 === null && node2 === null) return true
    if (node1 === null || node2 === null || node1.val !== node2.val) return false
    return bfs(node1.left, node2.left) && bfs(node1.right, node2.right)
  }

};

var isSameTree = function (p, q) {
  if (p === null && q === null) return true
  if (p === null || q === null || p.val !== q.val) return false
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};