const listNodeMaker = require('./listNodeMaker');

const arr = [1, 2, 3, 4, 5, 6, 7, 8]

const nodes = listNodeMaker(arr)


// from : Mike Lin / https://www.snippet.day/linfongi/
function reverse(curr) {
  var prev = null;
  while (curr) {
    var next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}

// const reversed_nodes_1 = reverse(nodes)
// console.log(
//   reversed_nodes_1
// )


//______________________________________________________________________________________//
const reverse_2 = (curr) => {
  let a, b;

  function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }

  while (curr) {
    // Reverse the nodes 
    a = new ListNode(curr.val)
    if (b) a.next = b
    b = a
    curr = curr.next
  }
  return b
}


const reversed_nodes_2 = reverse_2(nodes)

let head = reversed_nodes_2

while (head) {
  console.log(head.val)
  head = head.next
}