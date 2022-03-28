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