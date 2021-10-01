/**
 * Definition for a binary tree node.

 */

const binaryTreeMaker = require('./binaryTreeMaker');
const arr = [1, 2, 3, 4, 5, 6, 7]
const bst = binaryTreeMaker(arr)

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) return null
  const helpr = (inputRoot, left, right) => {
    let newRoot = inputRoot ? inputRoot : null
    if (newRoot) {
      newRoot.left = right ? helpr(right, right.left, right.right) : null
      newRoot.right = left ? helpr(left, left.left, left.right) : null
    }
    return newRoot
  };
  return helpr(root, root.left, root.right)
}
console.log("BST", bst)
console.log("BST:", invertTree(bst))


