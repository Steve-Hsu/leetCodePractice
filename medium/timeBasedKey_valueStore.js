
var TimeMap = function () {
  this.map = new Map()
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
  let arr = this.map.get(key) ? this.map.get(key) : []
  arr[timestamp] = value
  this.map.set(key, arr)
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
  let arr = this.map.get(key) ? this.map.get(key) : []
  if (arr.length === 0) return ""

  let res = arr[timestamp]
  if (res) return res
  while (timestamp-- > -1) {
    res = arr[timestamp]
    if (res) return res
  }
  return ""

};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */