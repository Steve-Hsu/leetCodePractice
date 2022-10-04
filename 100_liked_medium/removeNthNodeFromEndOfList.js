/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

// My Solution not work.
var removeNthFromEnd = function (head, n) {
  if (!head.next) {
    // let a = new ListNode([],null)
    return null
  }

  let map = []
  while (head) {
    map.push(new ListNode(head.val))
    head = head.next
  }
  // console.log(map)

  let result = null;
  let curr = result
  let key = map.length - n
  map.map((i, idx) => {
    if (idx != key && idx !== 0) {
      curr.next = i
      curr = curr.next
    }
  })
  return result
};

// Good Solution
// From https://leetcode.com/problems/remove-nth-node-from-end-of-list/discuss/1868716/True-one-pass-solution
var removeNthFromEnd_onePassSolution = function (head, n) {
  if (!head || !head.next) return null
  var left = head
  var right = head

  var front = 1
  var back = 1

  while (right.next) {
    if (front - back >= n) {
      back++
      left = left.next
    }
    right = right.next
    front++
  }

  if (front - back < n - 1) return head
  if (back === 1 && front - back === n - 1) return head.next
  left.next = left.next.next
  return head
};

// 2022/09/28, rewrite the code of solution above again.
var removeNthFromEnd = function (head, n) {
  let r = head
  let l = head
  let pos_r = 1
  let pos_l = 1

  while (r.next) {
    r = r.next
    pos_r++
    if (pos_r - pos_l > n) {
      l = l.next
      pos_l++
    }

  }
  if (pos_r === pos_l) return head.val = null
  if (pos_r - pos_l < n) return l.next

  l.next = l.next.next
  return head
};

// another smart solution
// from https://leetcode.com/spacegray/
// Make 2 nodeList, fast and slow. let fast go first in steps of n.
// Then make the 2 nodeList go together step by steps
// When fast hit null, reconnect slow.next to slow.next.next
var removeNthFromEnd = function (head, n) {
  let tempList = new ListNode(0);
  tempList.next = head;

  // set variables for next node and current node
  let slow = tempList;
  let fast = tempList;

  // set fast to n nodes ahead of slow
  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }

  // While we haven't reached the end of the list
  // set slow to n nodes behind fast
  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }

  // set slow.next to two nodes ahead of slow
  // then return the nth node of the list
  slow.next = slow.next.next;
  return tempList.next;
}