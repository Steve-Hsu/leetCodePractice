function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
};

module.exports = makeTreeWithArray = (arr) => {
  let arrLength = arr.length;
  let root = new TreeNode();
  let nodes = [root];
  let level = 0;
  let currentRoot = nodes[level];
  let leftIdx = -1
  let rightIdx = 0
  for (let i = 0; i <= arrLength - 1; i++) {
    if (arr[i] === 0 || arr[i]) { // The 0 can be the value of the nodess
      currentRoot = nodes[level];
      leftIdx = leftIdx + 2
      rightIdx = rightIdx + 2
      currentRoot.val = arr[i];
      if (arr[leftIdx] === 0 || arr[leftIdx]) {
        currentRoot.left = new TreeNode(arr[leftIdx]);
        nodes.push(currentRoot.left);
      }
      if (arr[rightIdx] === 0 || arr[rightIdx]) {
        currentRoot.right = new TreeNode(arr[rightIdx]);
        nodes.push(currentRoot.right);
      }
      level = level + 1;
    }
    if (i == arrLength - 1) return root
  }
};