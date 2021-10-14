/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
var isPalindrome = function (head) {
  let curr = head
  const stack = []
  while (curr) {

    stack.push(curr.val);
    curr = curr.next
  }
  let loop = 0
  while (loop < (stack.length / 2)) {
    if (stack.length === 1) return true;
    if (stack[loop] !== stack[stack.length - (1 + loop)]) return false;
    loop = loop + 1;
  }
  return true;
};

// LeetCode - Approach -2
const advancedRecursion = (head) => {
  let frontPointer = head;

  const recursivelyCheck = (currentNode) => {
    if (currentNode != null) {
      if (!recursivelyCheck(currentNode.next)) return false;
      if (currentNode.val != frontPointer.val) return false;
      frontPointer = frontPointer.next;
    }
    return true;
  }

  return recursivelyCheck(head)
}

// Other coder's solution
// From DawChihLiou https://leetcode.com/problems/palindrome-linked-list/discuss/499038/Intuitive-Javascript-Solution
// This solution is an advanced recursion.
var advancedRecursion_2 = function (head) {
  let curr = head;
  const traverse = node => {
    if (node === null) {
      return true;
    }
    // traverse to the end of the list first
    const prevIsSame = traverse(node.next);
    // when the call stack bounces back, compare the values 
    // from the head and from the bottom up
    const currIsSame = curr.val === node.val;
    curr = curr.next;
    return prevIsSame && currIsSame;
  }
  return traverse(head);
};

// From 34priyankagupta https://leetcode.com/problems/palindrome-linked-list/discuss/1238273/Easy-Javascript-Solution-or-Backtracking
var advancedRecursion_3 = function (head) {
  let node = head;
  let vode = head;
  let flag = true;
  backtrack(node);
  function backtrack(node) {
    node.next && backtrack(node.next);
    if (node.val !== vode.val) flag = false;
    vode = vode.next;
  }
  return flag;
};

// From Tomcek112 https://leetcode.com/problems/palindrome-linked-list/discuss/355521/Javascript-idiomatic-solution
var arrEvery = function (head) {
  const arr = [];
  while (head && head.val !== null) {
    arr.push(head.val);
    head = head.next;
  }
  return arr.every((e, i) => e === arr[arr.length - i - 1]);
};

// From rocklandz https://leetcode.com/problems/palindrome-linked-list/discuss/1010353/JavaScript-6-lines-solution-O(n)-time
// This slow but interesting and neat
var compareString = function (head) {
  let node = head
  let arr = []

  while (node) {
    arr.push(node.val)
    node = node.next
  }

  return arr.join('') === arr.reverse().join('')
};
