/**
 * @param {ListNode} head
 * @return {boolean}
 */

const arr = [-21, 10, 17, 8, 4, 26, 5, 35, 33, -7, -16, 27, -12, 6, 29, -12, 5, 9, 20, 14, 14, 2, 13, -24, 21, 23, -21, 5]
const linkedListMaker = require('./listNodeMaker');

const head = linkedListMaker(arr)

// LeeCode solution 
// Floyd's cycle finding algorithm
var hasCycle = function (head) {
  if (head == null) return false;

  let slow = head;
  let fast = head.next;
  while (slow != fast) {
    if (fast == null || fast.next == null) return false;
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
};

console.log("check : ", hasCycle(head))

// Slow + Fast Runner
// From Elias Lee https://leetcode.com/eliasylee/
const slowFastHasCycle = (head) => {
  let p1 = head, p2 = head;

  while (p2 && p2.next && p2.next.next) {
    p1 = p1.next;
    p2 = p2.next.next;
    if (p1 === p2) return true;
  }
  return false;
}

console.log("slow + fast runner : ", slowFastHasCycle(head))

// Set as stack
// From DawChihLiou https://leetcode.com/problems/linked-list-cycle/discuss/499021/Intuitive-Javascript-Solution
var setHasCycle = function (head) {
  const set = new Set();
  let node = head;
  // return true when node has been visited and saved in the set
  while (node !== null) {
    if (set.has(node)) {
      return true;
    }
    set.add(node);
    node = node.next
  }
  return false;
};

console.log("set : ", setHasCycle(head))