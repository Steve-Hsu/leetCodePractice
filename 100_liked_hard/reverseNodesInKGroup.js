/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
var reverseKGroup_1 = function (head, k) {
  if (head.val === 1 && k === 1) return head
  // if(head.val ===1 && k ===1 ) return new ListNode(1)
  if (k === 1) return head
  console.log("the head", head)

  let a, b, c, d;
  let lastNode_b;
  let lastNode_d;


  let node_length = 0
  let curr = head
  let kk = k

  while (curr.val <= k) {
    node_length += 1
    a = new ListNode(curr.val)
    if (b) a.next = b
    else lastNode_b = a
    b = a
    curr = curr.next
    if (!curr) return b
  }
  let fristNode_of_rest_Node = curr

  while (curr && kk) {
    node_length += 1
    kk = kk - 1
    console.log("length", node_length, "kk", kk, "curr", curr.val)
    c = new ListNode(curr.val)
    if (d) c.next = d
    else lastNode_d = c
    d = c
    curr = curr.next
    if (!curr && !kk) {
      console.log("here returned _BBBB")
      lastNode_b.next = d
      return b
    }
    if (!curr) {
      console.log("here returned")
      lastNode_b.next = fristNode_of_rest_Node
      return b
    }
  }
  console.log("here returned_AAAA")
  lastNode_b.next = d
  lastNode_d.next = curr
  return b
};

// My solution, but super slow
var reverseKGroup = function (head, k) {
  let a, wait_for_rvs, rest_head,
    temp_K = k,
    res = new ListNode(),
    curr = res;

  while (head) {
    --temp_K;

    // Reverse the nodes 
    a = new ListNode(head.val)
    if (wait_for_rvs) a.next = wait_for_rvs
    wait_for_rvs = a

    // If temp_K === 0, means you should insert the reversed nodes, and then start making a new reversed node.
    if (temp_K === 0) {
      while (wait_for_rvs) {
        curr.next = new ListNode(wait_for_rvs.val)
        curr = curr.next
        wait_for_rvs = wait_for_rvs.next
      }
      rest_head = head.next
      wait_for_rvs = null
      temp_K = k
    }
    head = head.next
  }

  if (temp_K === 0) {
    return res.next
  } else {
    curr.next = rest_head
    return res.next
  }
};

// Solution from : Mike Lin / https://www.snippet.day/linfongi/
// For example [ a, b, c, d, ...] and k = 3
function reverseKGroup_3(head, k) {
  if (!head) return null;
  var tail = head;
  // tail =a, head = a, 

  for (var i = 1; i < k; i++) {
    tail = tail.next;
    if (!tail) return head;
  } // after the for loop, tail = c

  var next = tail.next;
  // next = d, next belongs to the rest of the nodes. "d -> e -> f, ...", and next at "d"

  tail.next = null; // cut the connection of tail from the original listNodes. 
  // so now tail is belown to a node list "a -> b -> c", and head at "a", tail at "c".

  reverse(head); // put the head to be reverse, 
  // so since head represent to "a", so now equals we put the listNodes "a -> b -> c" into reverse
  // What we get here must be "c -> b -> a"
  // And now head still reprepsent to "a", so now "a.next" should connect to the rest of the nodes.
  head.next = reverseKGroup(next, k);
  return tail; // return tail is becase tail represent to "c", 
  //and since its reversed, so the tail now actually the first node, in the listNodes.
}

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

// Solution from Darian-Catalin Cucer
//https://leetcode.com/cucerdariancatalin/

var reverseKGroup_4 = function (head, k) {
  // will return the new head of the resultant linked list
  return reverseAGroup(head);

  function reverseAGroup(start) {
    // a temp varaible to move the curr start pointer k steps 
    let temp_k = k;
    let curr = start;
    while (curr && temp_k-- > 0) {
      curr = curr.next;
    }
    if (temp_k > 0) {  // curr group size is less than k, so need not reverse
      return start;
    }
    const groupTail = start,                // the start pointer is pointing to the tail node of the current group (on reversal)
      groupHead = reverse(start, curr); // get the tail pointer of the current group by reversing the group of nodes

    if (curr) {  // if there is a node followed by the current group, update the next pointer of the current group's tail next pointer
      groupTail.next = reverseAGroup(curr);    // we will get the next group head by recursively calling the function on the following node
    }
    return groupHead;    // finally return the current group head node
  }
  function reverse(root, nextGroup) {
    let curr = root,
      next = null,
      prev = null;

    while (curr && curr !== nextGroup) {    // the terminate condition will check if the current node reaches the next group's head node
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return prev;    // this will point to the new head node of the group after reversing 
  }
};