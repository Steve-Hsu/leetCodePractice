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
 * @param {number} k
 * @return {boolean}
 */
// My solution 
var findTarget = function (root, k) {
  let value = root.val || 0
  let map = {}
  return bft(root, value)


  function bft(node, val) {
    if (!node) return false
    if (map[k - val]) return true
    map[val] = true
    let leftVal = node.left?.val || 0
    let rightVal = node.right?.val || 0
    return bft(node.left, leftVal) || bft(node.right, rightVal)
  }
};

// My solution 
var findTarget = function (root, k) {
  let map = {}
  return bfs(root)

  function bfs(node) {
    if (!node) return false
    if (map[k - node.val]) return true
    map[node.val] = true
    return bfs(node.left) || bfs(node.right)
  }
};

// My solution 
var findTarget = function (root, k) {
  let set = new Set()
  return bfs(root)

  function bfs(node) {
    if (!node) return false
    if (set.has(k - node.val)) return true
    set.add(node.val)
    return bfs(node.left) || bfs(node.right)
  }
};


// Other solution 
// Fast and smaller From https://leetcode.com/shengdade/
var findTarget = function (root, k) {
  if (!root) return false;
  const set = new Set();
  const stack = [root];
  while (stack.length) {
    const node = stack.pop();
    if (set.has(k - node.val)) return true;
    set.add(node.val);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return false;
};