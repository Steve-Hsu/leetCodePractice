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
// My Solution
var deleteMiddle = function (head) {
  if (!head.next) return null
  let slow = head
  let fast = head.next

  while (fast) {

    for (let i = 2; i > 0; i--) {
      fast = fast.next
      if (!fast) {
        slow.next = slow.next.next
        return head
      }
    }
    slow = slow.next
  }
  return head
};

// Neat
var deleteMiddle = function (head) {
  if (!head.next) return null
  let slow = head
  let fast = head.next

  while (fast) {
    if (!fast.next || !fast.next.next) {
      slow.next = slow.next.next
      return head
    }
    fast = fast.next.next
    slow = slow.next
  }
};


// Other solution
// 3 Pointer from https://leetcode.com/Sktlez/
var deleteMiddle = function (head) {
  if (head.next === null) return null;

  let prev = null;
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  prev.next = slow?.next;

  return head;
};