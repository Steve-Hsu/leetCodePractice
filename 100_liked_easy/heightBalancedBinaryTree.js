/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

// const arr = [7, 4, 5, 9, 11, 13]
const arr = [13, 4, 5, 9, 11, 7]
// const arr = [-10, -3, 0, 5, 9]
var sortedArrayToBST = function (nums) {
  const sortedNums = nums.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  })

  const centerPoint = Math.floor(sortedNums.length / 2)
  const rightSide = sortedNums.slice(centerPoint).sort((a, b) => {
    if (a > b) return -1
    if (a < b) return a
    return 0
  })
  const leftSide = sortedNums.slice(0, centerPoint).sort((a, b) => {
    if (a > b) return -1
    if (a < b) return a
    return 0
  })

  const result = [(rightSide.pop())]

  let count = 1;
  while (leftSide.length > 0 || rightSide.length > 0) {

    for (let i = 0; i < count; i++) {
      leftSide[0] === 0 || leftSide[0] ?
        result.push(leftSide.shift()) :
        result.push(null);
    }
    for (let i = 0; i < count; i++) {
      rightSide[0] === 0 || rightSide[0] ?
        result.push(rightSide.shift()) :
        result.push(null);
    }
    count = count * 2
  }
  // console.log("result", result)
  const makeTreeWithArray = require('./binaryTreeMaker');

  return makeTreeWithArray(result)
};
console.log(sortedArrayToBST(arr))


// Solutions ------------------------------------------------------------------------
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
};

// const nums = [0, -10, 9, 5, -3]
const nums = [6, 2, 8, 9, 3, 5, 7]
console.log("original nums", nums)

// As the question required, the array must be sorted in ascending order in advance.
nums.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0
})
console.log("Sorted nums", nums)

// Solution Approach - 1
const leftMiddleNodeAsTheRoot = (arr) => {
  const helper = (left, right) => {
    if (left > right) return null;

    // always choose left middle node as a root
    let p = Math.floor((left + right) / 2);

    // preorder traversal" node -> left -> right
    let root = new TreeNode(arr[p]);

    root.left = helper(left, p - 1);
    root.right = helper(p + 1, right);
    return root
  }
  return helper(0, arr.length - 1)
}

console.log(
  "left Middle Node", leftMiddleNodeAsTheRoot(nums));

// Solution Approach - 2
const rightMiddleNodeAsTheRoot = (arr) => {
  const helper = (left, right) => {
    if (left > right) return null;

    // Always choose right middle node as a root
    let p = Math.floor((left + right) / 2);
    if ((left + right) % 2 == 1) ++p;

    // Preorder traversal : node -> left -> right
    let root = new TreeNode(arr[p]);

    root.left = helper(left, p - 1);
    root.right = helper(p + 1, right);
    return root
  }
  return helper(0, arr.length - 1)
}

console.log(
  "right Middle Node", rightMiddleNodeAsTheRoot(nums));

// Solution intuitive JS from Daw-Chin Liou https://leetcode.com/DawChihLiou/
const intuitiveSortedArrayToBST = function (nums) {
  if (!nums.length) return null;

  const mid = Math.floor(nums.length / 2);
  const root = new TreeNode(nums[mid]);

  // subtrees are BSTs as well
  root.left = sortedArrayToBST(nums.slice(0, mid));
  root.right = sortedArrayToBST(nums.slice(mid + 1));

  return root;
};

console.log(
  "Intuitive solution :", intuitiveSortedArrayToBST(nums));

// Solution from Mrmagician https://leetcode.com/Mrmagician/
var recursiveSortedArrayToBST = function (nums, start = 0, end = nums.length - 1) {
  if (start <= end) {
    let mid = Math.floor((start + end) / 2);
    // console.log(mid, end)
    let root = new TreeNode(nums[mid]);
    root.left = recursiveSortedArrayToBST(nums, start, mid - 1);
    root.right = recursiveSortedArrayToBST(nums, mid + 1, end);
    return root;
  }
  return null;
};

console.log(
  "Recursive solution : ", recursiveSortedArrayToBST(nums)
)

// Solution without tree function 
// from b45i https://leetcode.com/b45i/
var noTreeFuncSortedArrayToBST = function (nums) {
  if (!nums || !nums.length) return null;
  const mid = (nums.length) / 2 | 0;
  return {
    val: nums[mid],
    left: noTreeFuncSortedArrayToBST(nums.slice(0, mid)),
    right: noTreeFuncSortedArrayToBST(nums.slice(mid + 1))

  }
}

console.log("no tree function:", noTreeFuncSortedArrayToBST(nums))