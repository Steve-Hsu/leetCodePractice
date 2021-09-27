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

// console.log("list node",
//   listNodeMaker(arr)
// )
// My solution
var addTwoNumbers = function (l1, l2) {
  let extra = 0
  let root = new ListNode();
  let currNode = root;
  let currL1 = l1;
  let currL2 = l2
  while (currL1 || currL2 || extra) {
    let n1 = currL1 ? currL1.val : 0
    let n2 = currL2 ? currL2.val : 0

    let addUp = Number(n1 + n2 + extra);
    let value = addUp;
    extra = 0;
    if (currL1) currL1 = currL1.next ? currL1.next : null;
    if (currL2) currL2 = currL2.next ? currL2.next : null;
    if (addUp > 9) {
      extra = 1
      value = Number(Array.from(String(addUp))[1]);
    }
    currNode.val = value;
    if (currL1 || currL2 || extra) {
      currNode.next = new ListNode();
      currNode = currNode.next;
    }

  }
  return root
};

console.log("return",
  addTwoNumbers(l1, l2)
)