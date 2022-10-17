/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
// My solution, but slow, and stupid.
var deleteNode = function (node) {
  let temp = node
  while (temp) {
    if (temp.next.next) {
      temp.val = temp.next.val
      temp = temp.next
    } else {
      break
    }
  }
  temp.val = temp.next.val
  temp.next = null
};

// LeetCode soluion
// Only need to do 2 steps
// 1.) update the current node value as the next node value
// 2.) point current next to current next and next. 
var deleteNode = function (node) {
  node.val = node.next.val
  node.next = node.next.next
};