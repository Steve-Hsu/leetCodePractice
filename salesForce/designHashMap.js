

// Easy solution / class-liked function --------
var MyHashMap_1 = function () {
  this.data = []
  this.put = function (key, value) {
    this.data[key] = value
  };
  this.get = function (key) {
    let value = this.data[key]
    return value !== undefined ? value : -1;
  };
  this.remove = function (key) {
    delete this.data[key]
  };
};



// Easy solution / one function with prototype--------
/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */

var MyHashMap = function () {
  this.data = []
}

/**
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.put = function (key, value) {
  this.data[key] = value
};


MyHashMap.prototype.get = function (key) {
  let value = this.data[key]
  return value !== undefined ? value : -1;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  delete this.data[key]
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

// Slower but robust
// Easy solution from https://leetcode.com/problems/design-hashmap/discuss/1097755/JS-Python-Java-C%2B%2B-or-(Updated)-Hash-and-Array-Solutions-w-Explanation
// This solution constrained size of the array to 10^6, make this more robust
class MyHashMap_2 {
  constructor() {
    this.data = new Array(1000001)
  }
  put(key, val) {
    this.data[key] = val
  }
  get(key) {
    let val = this.data[key]
    return val !== undefined ? val : -1
  }
  remove(key) {
    delete this.data[key]
  }
}

// Slower but robust
// Hashmap with ListNode from https://leetcode.com/problems/design-hashmap/discuss/1097755/JS-Python-Java-C%2B%2B-or-(Updated)-Hash-and-Array-Solutions-w-Explanation
// This solution constrained size of the array to 10^6, make this more robust
// No matter how greater the key you give, it constrained the key within 10^6 by its method "hash"
class ListNode {
  constructor(key, val, next) {
    this.key = key;
    this.val = val;
    this.next = next;
  }
}

class MyHashMap {
  constructor() {
    this.size = 19997
    this.mult = 12582917
    this.data = new Array(this.size)
  }
  hash(key) {
    return key * this.mult % this.size
  }
  put(key, val) {
    this.remove(key)
    let h = this.hash(key)
    let node = new ListNode(key, val, this.data[h])
    this.data[h] = node
  }
  get(key) {
    let h = this.hash(key), node = this.data[h];
    for (; node; node = node.next)
      if (node.key === key) return node.val
    return -1;
  }
  remove(key) {
    let h = this.hash(key), node = this.data[h];
    if (!node) return
    if (node.key === key) this.data[h] = node.next
    else for (; node.next; node = node.next)
      if (node.next.key === key) {
        node.next = node.next.next
        return
      }
  }
}