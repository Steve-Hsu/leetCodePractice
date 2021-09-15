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

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}


// Create binary Tree
const arr = [1, 2, 3, 4, null, 6, 7, 8, 9, 10, 11, 12, 13];

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
console.log(root)

// var inorderTraversal = function (root) {
//   let currentRoot = root
//   let arr = []
//   while (currentRoot) {
//     if (currentRoot.val) arr.push(currentRoot.val)
//     currentRoot.left ? currentRoot.left : currentRoot.right;
//   }
//   return arr
// };

// console.log(inorderTraversal(root))

