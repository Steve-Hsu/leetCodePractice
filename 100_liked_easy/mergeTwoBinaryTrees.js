/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 *
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
};
const bstMaker = require('../binaryTreeMaker');

const arr_1 = [1, 2]
const arr_2 = [2, 4, 5, 1]

const bst_1 = bstMaker(arr_1);
const bst_2 = bstMaker(arr_2)


// My solution
var mergeTrees = function (root1, root2) {

  if (root1 === null) return root2;
  if (root2 === null) return root1;

  root1.val = root1.val + root2.val;
  root1.left = mergeTrees(root1.left, root2.left)
  root1.right = mergeTrees(root1.right, root2.right)

  return root1
};

console.log(mergeTrees(bst_1, bst_2));

