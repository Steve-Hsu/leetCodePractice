
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

module.exports = listNodeMaker = (arr) => {
  const head = new ListNode();
  let currNode = head
  for (const i in arr) {
    currNode.val = arr[i];
    if (i != arr.length - 1) {
      currNode.next = new ListNode();
      currNode = currNode.next;
    }
  }
  return head
}

