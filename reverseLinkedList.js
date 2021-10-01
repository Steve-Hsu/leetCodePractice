const linkNodeMaker = require('./listNodeMaker');
const arr = [5, 4, 3, 2, 1]
const nodes = linkNodeMaker(arr);

// Leetcode solution_1
const literation = (head) => {
  let result = null;
  let curr = head;
  while (curr != null) {
    let nextTemp = curr.next;
    curr.next = result;
    result = curr;
    curr = nextTemp;
  }
  return result;
}

// From Jontystanely21 https://leetcode.com/problems/reverse-linked-list/discuss/1449712/Easy-C%2B%2BJavaPythonJavaScript-Explained%2BAnimated
var reverseList = function (head) {
  let [prev, cur] = [null, head]
  while (cur) {
    [cur.next, prev, cur] = [prev, cur, cur.next]
  }
  return prev
}
console.log("reverseList", reverseList(nodes))