// Medium
/**
 * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const listNodeMaker = require('./listNodeMaker');
const l1 = listNodeMaker([9, 9, 9, 9, 9, 9, 9]);
const l2 = listNodeMaker([9, 9, 9, 9]);


function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

var addTwoNumbers = function (l1, l2) {
  let carry = 0,
    root = new ListNode(),
    currNode = root,
    currL1 = l1,
    currL2 = l2;

  while (currL1 || currL2 || carry) {
    let n1 = currL1 ? currL1.val : 0
    let n2 = currL2 ? currL2.val : 0

    let addUp = Number(n1 + n2 + carry);
    let value = addUp;
    carry = 0;

    if (addUp > 9) {
      carry = 1
      value = Number(Array.from(String(addUp))[1]);
    }
    currNode.val = value;

    if (currL1) currL1 = currL1.next ? currL1.next : null;
    if (currL2) currL2 = currL2.next ? currL2.next : null;

    if (currL1 || currL2 || carry) {
      currNode.next = new ListNode();
      currNode = currNode.next;
    }
  }
  return root
};

console.log("return",
  addTwoNumbers(l1, l2)
)