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
 * @return {number[]}
 */

// Create binary Tree
// const arr = [1, 2, 3, 4, null, 6, 7, 8, 9, 10, 11, 12, 13];
// const arr = [1, null, 2, 3]
const arr = [1, 2, 3, 4, 5, 6]
const makeTreeWithArray = require('./binaryTreeMaker');

const root = makeTreeWithArray(arr);
console.log("the binary tree : ", root)

// Recursive solution
const recursiveBinaryTree = (root) => {
  let res = [];
  const helper = (root, res) => {
    if (root != null) {
      if (root.left != null) {
        helper(root.left, res);
      }
      res.push(root.val);
      if (root.right != null) {
        helper(root.right, res);
      }
    }
    return res
  }
  return helper(root, res)
}

console.log("recursive - in-order:", recursiveBinaryTree(root));

// Recursive solution_2 from Hong : https://leetcode.com/hon9g/
const recursive2BinaryTree = (root) => {
  if (!root) return [];
  const res = [];
  res.push(...recursive2BinaryTree(root.left));
  res.push(root.val);
  res.push(...recursive2BinaryTree(root.right));
  return res;
}

console.log("recursive_2 - in-order:", recursiveBinaryTree(root));

// Stack solution
const stackBinaryTree = (root) => {
  const stack = [];
  const res = [];
  let curr = root
  while (curr || stack.length) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop();
    res.push(curr.val);
    curr = curr.right;

  }
  return res
}

console.log("stack  - in-order:", stackBinaryTree(root));

// Iteration solution from Mike Lin :https://leetcode.com/linfongi/
const iterationBinaryTree = (root) => {
  const stack = [];
  const res = [];
  while (root || stack.length) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      root = stack.pop();
      res.push(root.val);
      root = root.right;
    }
  }
  return res
}

console.log("iteration  - in-order:", iterationBinaryTree(root));


// Moriss solution - Best solution
const morrisBinaryTree = (root) => {
  let curr = root
  let pre;
  let res = []
  while (curr) {
    if (!curr.left) {
      res.push(curr.val);
      curr = curr.right;
    } else {
      pre = curr.left;
      while (pre.right !== null) {
        pre = pre.right
      }

      pre.right = curr;
      let temp = curr; // Target the current.
      curr = curr.left;
      temp.left = null; // Remove the current, or say the left of the previous current, to prevent its as the sub node of preveious current in order to prevent duplicately loop through
    }
  }
  return res
}

console.log("morris - in-order:", morrisBinaryTree(root));