/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// https://leetcode.com/problems/remove-duplicates-from-sorted-list/
// My solution

// My solution
var deleteDuplicates = function (head) {
  if (!head) return head
  let slow = head
  let fast = slow.next


  while (slow) {
    if (fast) {
      if (slow.val === fast.val) {
        fast = fast.next
      } else {
        slow.next = fast
        slow = slow.next
      }
    } else {
      slow.next = null
      return head
    }
  }
  return head
};


var deleteDuplicates = function (head) {
  if (!head) return head
  let slow = head
  let fast = slow.next

  while (fast) {
    if (slow.val === fast.val) {
      fast = fast.next
    } else {
      slow.next = fast
      slow = slow.next
    }
  }
  slow.next = null
  return head

};

// My neat version 
var deleteDuplicates = function (head) {
  if (!head) return head
  let slow = head
  let fast = slow.next

  while (fast) {
    if (slow.val !== fast.val) {
      slow.next = fast
      slow = slow.next
    }
    fast = fast.next
  }
  slow.next = null
  return head
};

// other solution 
// Best ! I think this solution more easy to understand
// from https://leetcode.com/rickp/
var deleteDuplicates = function (head) {
  var current = head;

  while (current) {
    if (current.next !== null && current.val == current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
};