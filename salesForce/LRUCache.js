/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity
  this.data = {}
  this.LRU = []
};

/** 
 * @param {number} key
 * @return {number}
 */

// My solution, it works in most of the time, but got "Time Limit Exceeded" after submited
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity
    this.data = {}
    this.LRU = []
  }

  get(key) {
    let ans = -1
    if (this.data[key] >= 0) {
      this.LRU = this.LRU.filter((i) => i !== key)
      this.LRU.push(key)
      ans = this.data[key]
    }
    return ans
  }

  put(key, value) {
    if (this.data[key] === 0 || this.data[key]) {
      this.data[key] = value
      this.LRU = this.LRU.filter((i) => i !== key)
      this.LRU.push(key)
    } else {

      if (Object.keys(this.data).length < this.capacity) {
        this.data[key] = value
        this.LRU.push(key)
      } else {
        const leastKey = this.LRU[0]
        this.LRU = this.LRU.filter((i) => i !== leastKey)
        delete this.data[leastKey]
        this.data[key] = value
        this.LRU.push(key)
      }
    }
  }
}


/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */


// Other Solution
// From Hongbo Miao https://leetcode.com/problems/lru-cache/discuss/399146/Clean-JavaScript-solution
class LRUCache_1 {
  constructor(capacity) {
    this.cache = new Map();
    this.capacity = capacity;
  }

  get(key) {
    if (!this.cache.has(key)) return -1;

    const v = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, v);
    return this.cache.get(key);
  };

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }
    this.cache.set(key, value);
    if (this.cache.size > this.capacity) {
      this.cache.delete(this.cache.keys().next().value);  // keys().next().value returns first item's key
    }
  };
}