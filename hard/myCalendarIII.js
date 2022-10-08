
// This works only when the test is in small quantity
var MyCalendarThree = function () {
  this.tables = {}
  this.max = 0
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {number}
 */
MyCalendarThree.prototype.book = function (start, end) {
  for (let i = start; i < end; i++) {
    this.tables[i] = this.tables[i] ? this.tables[i] + 1 : 1
    this.bookLength = 0
  }

  // console.log(this.tables)
  return this.max
};

/** 
 * Your MyCalendarThree object will be instantiated and called as such:
 * var obj = new MyCalendarThree()
 * var param_1 = obj.book(start,end)
 */

// My soution test_2
var MyCalendarThree = function () {
  this.tables = {}
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {number}
 */
MyCalendarThree.prototype.book = function (start, end) {
  let max = 0
  this.tables[start] = (this.tables[start] || 0) + 1
  this.tables[end] = (this.tables[end] || 0) + 1

  for (let key in this.tables) {
    if (key > start && key < end) this.tables[key]++

    max = Math.max(max, this.tables[key])
  }

  return max
};

/** 
 * Your MyCalendarThree object will be instantiated and called as such:
 * var obj = new MyCalendarThree()
 * var param_1 = obj.book(start,end)
 */

// other Solution 
// from https://leetcode.com/HimanshuBhoir/
// This is a sweep-line algorithm
var MyCalendarThree = function () {
  this.tm = {}
};

MyCalendarThree.prototype.book = function (start, end) {
  this.tm[start] = (this.tm[start] || 0) + 1
  this.tm[end] = (this.tm[end] || 0) - 1
  let max = count = 0
  for (let val in this.tm) {
    max = Math.max(max, count += this.tm[val])
  }
  return max
};

var obj = new MyCalendarThree()
var param_1 = obj.book(10, 20)
var param_2 = obj.book(9, 20)
var param_2 = obj.book(7, 20)
var param_2 = obj.book(14, 20)


console.log(
  param_2
)

console.log(
  obj.tm
)