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

// Create binary Tree
// const arr = [1, 2, 3, 4, null, 6, 7, 8, 9, 10, 11, 12, 13];
const arr = [1, 2, 2, 2, null, 2] // Expect false
// const arr = [0, -1, -1, 3, 5, 5, 3, null, null, null] // Expect TRUE
const makeTreeWithArray = require('../binaryTreeMaker');

const root = makeTreeWithArray(arr);
console.log("root", root)

// My solution, get ideas from morris solution for in-order binary tree traversal
// Tear the tree into left side and right side, left side run in-order, right side run reverse of in-order, right -> root -> left, compare the value step by step;
var isSymmetric = function (root) {
  let leftCurr = root.left;
  let pre;
  let rightCurr = root.right;
  let pre_2;

  while (leftCurr || rightCurr) {
    if (!leftCurr || !rightCurr) return false;
    if (leftCurr.val !== rightCurr.val) return false;

    if (!leftCurr.left && !rightCurr.right) {
      leftCurr = leftCurr.right;
      rightCurr = rightCurr.left;
    } else {
      pre = leftCurr.left;
      pre_2 = rightCurr.right;
      if (!pre || !pre_2) return false
      while (pre.right && pre_2.left) {
        pre = pre.right;
        pre_2 = pre_2.left;
      }
      if (!pre || !pre_2) return false
      pre.right = leftCurr;
      pre_2.left = rightCurr;
      let temp = leftCurr; // Target the current.
      let temp_2 = rightCurr;
      leftCurr = leftCurr.left;
      rightCurr = rightCurr.right;
      temp.left = null; // Remove the current, or say the left of the previous current, to prevent its as the sub node of preveious current in order to prevent duplicately loop through
      temp_2.right = null;
    }
  }
  return true
};

console.log("my solution", isSymmetric(root))




// Iterative Solution with queue
const iterativeSymmetricTree = (root) => {
  let q = [];
  q.push(root);
  q.push(root);
  while (q.length) {
    let t1 = q.pop();
    let t2 = q.pop();
    if (t1 === null && t2 === null) continue;
    if (t1 === null || t2 === null) return false;
    if (t1.val != t2.val) return false;
    q.push(t1.left);
    q.push(t2.right);
    q.push(t1.right);
    q.push(t2.left);
  }
  return true
}

console.log("iterative_1", iterativeSymmetricTree(root));

// Iterative Solution with queue - 2 from Benny Joo https://leetcode.com/hbjORbj/
var iterative_2_Symmetric = function (root) {
  let queue = [root, root];
  while (queue.length > 0) {
    let node1 = queue.shift(), node2 = queue.shift();
    if (node1 == null && node2 == null) continue;
    if (node1 == null || node2 == null) return false;
    if (node1.val !== node2.val) return false;
    queue.push(node1.left, node2.right);
    queue.push(node1.right, node2.left);
  }

  return true;
  // Time Complexity: O(n), we possibly visit all nodes
  // Space Complexity: O(n/2) = O(n), the bottom level could have at most n/2 nodes
}

console.log("iterative_2", iterative_2_Symmetric(root))

// Recursive solution
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

console.log("recursive_1", recursiveSymmetricTree(root));

// A recursive arroach from 9682w https://leetcode.com/user9682w/
var recursive_2_Symmetric = function (root) {
  if (root == null) return true;

  return symmetryChecker(root.left, root.right);
};

function symmetryChecker(left, right) {
  if (left == null && right == null) return true; // If both sub trees are empty
  if (left == null || right == null) return false; // If only one of the sub trees are empty
  if (left.val !== right.val) return false; // If the values dont match up

  // Check both subtrees but travelled in a mirrored/symmetric fashion
  // (one goes left, other goes right)  and make sure they're both symmetric
  return symmetryChecker(left.left, right.right) &&
    symmetryChecker(left.right, right.left);
}

console.log("recursive_2", recursive_2_Symmetric(root))

// A recursive aprroach from ducnd58233 https://leetcode.com/ducnd58233/
var recursive_3_Symmetric = (root) => {
  if (!root) return true;

  function helper(p, q) {
    if (!p && !q) return true;
    if (!p || !q) return false;
    return p.val === q.val && helper(p.left, q.right) && helper(p.right, q.left);
  }

  return helper(root.left, root.right);
}

console.log("recursive_3", recursive_3_Symmetric(root))

// A recursive approach from from Benny Joo https://leetcode.com/hbjORbj/
var recursive_4_Symmetric = function (root) {
  if (!root) {
    return null;
  }
  return isSymmetricHelper(root.left, root.right);
  // T.C: O(N)
  // S.C: O(H)
};

const isSymmetricHelper = (root1, root2) => {
  // if both roots are null, symmetric
  if (!root1 && !root2) {
    return true;
  }
  // if only one of the roots is null, asymmetric
  if (!root1 || !root2) {
    return false;
  }
  return (
    root1.val === root2.val &&
    isSymmetricHelper(root1.right, root2.left) &&
    isSymmetricHelper(root1.left, root2.right)
  );
};

console.log("recursive_4", recursive_4_Symmetric(root))