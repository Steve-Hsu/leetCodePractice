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

// My solution - recursion
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
console.log("BST", bst);
console.log("My solution :", invertTree(bst));


// LeetCode solution - 1 - rescursion
const recursionInvertTree = (root) => {
  if (!root) return null;
  let right = new TreeNode();
  right = recursionInvertTree(root.right);
  let left = new TreeNode();
  left = recursionInvertTree(root.left);
  root.left = right;
  root.right = left;
  return root;
}

console.log("recursionInvertTree:", recursionInvertTree(bst));

// From HongBo-Miao https://leetcode.com/problems/invert-binary-tree/discuss/399221/Clean-JavaScript-iterative-DFS-BFS-solutions
const neatRecursionInvertBST = (root) => {
  if (root == null) return root;
  [root.left, root.right] = [neatRecursionInvertBST(root.right), neatRecursionInvertBST(root.left)];
  return root;
}

// From HongBo-Miao
const DFSInvertTree = (root) => {
  const stack = [root];
  while (stack.length) {
    const n = stack.pop();
    if (n != null) {
      [n.left, n.right] = [n.right, n.left];
      stack.push(n.left, n.right)
    }
  }
  return root;
}

// From HongBo-Miao
const BFSInvertTree = (root) => {
  const queue = [root];
  while (queue.length) {
    const n = queue.shift();
    if (n != null) {
      [n.left, n.right] = [n.right, n.left];
      queue.push(n.left, n.right)
    }
  }
  return root;
}