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

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

// Create binary Tree
// const arr = [1, 2, 3, 4, null, 6, 7, 8, 9, 10, 11, 12, 13];
// const arr = [1, 2, 2, 2, null, 2]
const arr = [2, 3, 3, 4, 5, null, 4]

const makeTreeWithArray = (arr) => {
  let arrLength = arr.length;
  let root = new TreeNode();
  let nodes = [root];
  let level = 0;
  let currentRoot = nodes[level];
  let leftIdx = -1
  let rightIdx = 0
  for (let i = 0; i <= arrLength - 1; i++) {
    if (arr[i]) {
      currentRoot = nodes[level];
      leftIdx = leftIdx + 2
      rightIdx = rightIdx + 2
      currentRoot.val = arr[i];
      if (arr[leftIdx]) {
        currentRoot.left = new TreeNode(arr[leftIdx]);
        nodes.push(currentRoot.left);
      }
      if (arr[rightIdx]) {
        currentRoot.right = new TreeNode(arr[rightIdx]);
        nodes.push(currentRoot.right);
      }
      level = level + 1;
    }
    if (i == arrLength - 1) return root
  }
}

const root = makeTreeWithArray(arr);
console.log("root", root)

// My solution, get ideas from morris solution for in-order binary tree traversal
// Tear the tree into left side and right side, left side run in-order, right side run reverse of in-order, right -> root -> left, compare the value step by step;
var isSymmetric = function (root) {
  const leftTree = root.left;
  const rightTree = root.right;

  let inOrderCurr = leftTree
  let pre;
  let reInOrderCurr = rightTree
  let pre_2;

  while (inOrderCurr || reInOrderCurr) {
    if (!inOrderCurr || !reInOrderCurr) return false;
    if (inOrderCurr.val !== reInOrderCurr.val) return false;

    if (!inOrderCurr.left && !reInOrderCurr.right) {
      inOrderCurr = inOrderCurr.right;
      reInOrderCurr = reInOrderCurr.left;
    } else {
      pre = inOrderCurr.left;
      pre_2 = reInOrderCurr.right;
      if (!pre) return false
      if (!pre_2) return false
      while (pre.right && pre_2.left) {
        pre = pre.right;
        pre_2 = pre_2.left;
      }
      if (!pre) return false
      if (!pre_2) return false
      pre.right = inOrderCurr;
      pre_2.left = reInOrderCurr;
      let temp = inOrderCurr; // Target the current.
      let temp_2 = reInOrderCurr;
      inOrderCurr = inOrderCurr.left;
      reInOrderCurr = reInOrderCurr.right;
      temp.left = null; // Remove the current, or say the left of the previous current, to prevent its as the sub node of preveious current in order to prevent duplicately loop through
      temp_2.right = null;
    }
  }
  return true
};

console.log(isSymmetric(root))

const recursiveSymmetricTree = (root) => {
  const leftTree = root.left;
  const rightTree = root.right;

  const isMirror = (t1, t2) => {
    if (t1 === null && t2 === null) return true;
    if (t1 === null || t2 === null) return false;
    return (t1.val === t2.val)
      && isMirror(t1.right, t2.left)
      && isMirror(t1.left, t2.right)
  }


  return isMirror(leftTree, rightTree)
}

console.log(recursiveSymmetricTree(root))