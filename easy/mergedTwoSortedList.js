/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


// Solution_1, only for array that not applying for nodeList.
var mergeTwoArrays = function (arr1, arr2) {
  if (arr1.length === 0 && arr2.length === 0) {
    return []
  }

  let s;
  if (arr1.length !== 0 && arr2.length !== 0) {
    s = [...arr1, ...arr2]
  }
  if (arr1.length === 0) {
    s = arr2
  }
  if (arr2.length === 0) {
    s = arr1
  }

  // let arr = s.split(",")
  let list = s.map((i) => {
    return Number(i)
  })

  const sortedList = list.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  })

  return sortedList
};
let arr_1 = [1, 2, 4]
let arr_2 = [1, 3, 4]

console.log(mergeTwoArrays(arr_1, arr_2))


// -----------------------------------------------------
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

let l1_1 = new ListNode(4)
let l1_2 = new ListNode(2)
let l1_3 = new ListNode(8)

let l2_1 = new ListNode(9);
let l2_2 = new ListNode(7)
let l2_3 = new ListNode(10)

l1_1.next = l1_2
l1_2.next = l1_3

l2_1.next = l2_2
l2_2.next = l2_3

// Solution_2, this example get from Ryan Shin. https://github.com/ryanminjaeshin?tab=repositories
var mergeTwoLists = function (l1, l2) {
  let tempNode = new ListNode(0, null);
  let currentNode = tempNode;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      currentNode.next = l1;
      l1 = l1.next
    } else {
      currentNode.next = l2;
      l2 = l2.next
    }
    currentNode = currentNode.next;
  }
  currentNode.next = l1 || l2;

  return tempNode.next;
};


console.log(mergeTwoLists(l1_1, l2_1))