
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

module.exports = listNodeMaker = (arr) => {
  const root = new ListNode();
  let currNode = root
  for (const i in arr) {
    currNode.val = arr[i];
    if (i != arr.length - 1) {
      currNode.next = new ListNode();
      currNode = currNode.next;
    }
  }
  return root
}

