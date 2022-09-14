/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

// My solution, worked well, fast at Runtime 94.68%, Memory usage 90.35
var mergeKLists = function (lists) {

  let map = new Map()
  let idx = 0
  let head = new ListNode()
  let curr = head
  let checkLists = true
  let maxNumber = 0
  let minNumber = 0
  let listsSize = lists.length

  while (checkLists) {
    let unit = lists[idx];
    while (unit) {
      let key = unit.val
      let qty = map.get(key) || 0;
      map.set(key, qty + 1)
      unit = unit.next
      maxNumber = Math.max(maxNumber, key)
      minNumber = Math.min(minNumber, key)
    }
    ++idx
    if (idx > listsSize) checkLists = false
  }

  // console.log(map)

  for (let i = minNumber; i <= maxNumber; i++) {
    let qty = map.get(i)
    while (qty) {
      qty = qty - 1;
      curr.next = new ListNode(i);
      curr = curr.next;
    }
  }
  return head.next
};


// My solution_2 fast at Runtime 94.42%, Memory usage 99.29
var mergeKLists_2 = function (lists) {
  let map = new Map()
  let head = new ListNode()
  let [curr, maxNum, minNum] = [head, 0, 0]

  // Walk through all the nodelist in lists, 
  // Get the value of node as key for map, and its Occurrence as qty to be value for map.
  for (let i = 0; i < lists.length; i++) {
    let node = lists[i];
    while (node) {
      let key = node.val
      let qty = map.get(key) || 0;
      map.set(key, qty + 1)
      maxNum = Math.max(maxNum, key)
      minNum = Math.min(minNum, key)
      node = node.next
    }
  }

  // Walk through the map to generate a new nodelist for return
  for (let i = minNum; i <= maxNum; i++) {
    let qty = map.get(i)
    while (qty) {
      qty = qty - 1;
      curr.next = new ListNode(i);
      curr = curr.next;
    }
  }
  return head.next
};

// Other best solution - run fast and use jsut few memory
// The idea is merge the frist 2 nodeLists, in the list, as 1 nodeList, and push its back to lists, and repeat again, until the lists only contain 1 nodeList
// from https://leetcode.com/problems/merge-k-sorted-lists/discuss/2383609/JavaC%2B%2BPythonJavaScriptKotlinO(n)timeBEATS-99.97-MEMORYSPEED-0ms-JULY-2022
function mergeLists_3(a, b) {
  const dummy = new ListNode(0);
  let temp = dummy;
  while (a !== null && b !== null) {
    if (a.val < b.val) {
      temp.next = a;
      a = a.next;
    } else {
      temp.next = b;
      b = b.next;
    }
    temp = temp.next;
  }

  if (a !== null) temp.next = a;
  if (b !== null) temp.next = b;

  return dummy.next;
}

var mergeKLists = function (lists) {
  if (lists.length === 0) {
    return null;
  }
  // two two
  // priority queue
  while (lists.length > 1) {
    let a = lists.shift(); // the head will contains the "less" length list
    let b = lists.shift(); // acturally, we can use the linkedlist to replace it, the while loop will be the while( list.header.next !== null || lists.length > 0)
    const h = mergeLists(a, b);
    lists.push(h);
  }
  return lists[0];
};