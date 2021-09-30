
// My hash set solution;
var getIntersectionNode = function (headA, headB) {
  let nodes_1 = headA;
  let nodes_2 = headB;
  let set = new Set();
  while (nodes_1) {
    set.add(nodes_1)
    nodes_1 = nodes_1.next ? nodes_1.next : null;
  }
  while (nodes_2) {
    if (set.has(nodes_2)) return nodes_2;
    nodes_2 = nodes_2.next ? nodes_2.next : null;
  }
  return null
};

// LeetCode solution - two pointers
const twoPointers = (headA, headB) => {
  let pA = headA, pB = headB;
  while (pA != pB) {
    pA = pA === null ? headB : pA.next;
    pB = pB === null ? headA : pB.next;
  }
  return pA;
}

