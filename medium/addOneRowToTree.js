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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
const TreeMaker = require('../binaryTreeMaker')


function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? 0 : left)
  this.right = (right === undefined ? 0 : right)
}

var addOneRow = function (root, v, d) {
  if (d === 1) root = new TreeNode(v, root)
  dfs(root)
  return root

  function dfs(node, level = 1) {
    if (!node) return;
    if (level === d - 1) {
      node.left = new TreeNode(v, node.left)
      node.right = new TreeNode(v, null, node.right)
    }
    dfs(node.left, level + 1)
    dfs(node.right, level + 1)
  }
};

let tree = TreeMaker([4, 2, 6, 3, 1, 5])
console.log(
  tree
)

// console.log(
//   addOneRow(tree, 1, 2)
// )


// Solution
// From https://leetcode.com/mmmymustafa/
var addOneRow = function (root, v, d) {
  if (d === 1) root = new TreeNode(v, root)

  let dfs = (node, level = 1) => {
    if (!node) return;

    if (level === d - 1) {
      node.left = new TreeNode(v, node.left)
      node.right = new TreeNode(v, null, node.right)
    }

    dfs(node.left, level + 1)
    dfs(node.right, level + 1)
  }

  dfs(root)

  return root
};