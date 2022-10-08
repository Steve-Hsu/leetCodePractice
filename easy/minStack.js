
// My solution
// Use 2 arrays to store stack and min values.
const myMinStack = function () {
  this.min = []
  this.stack = []
};

/** 
 * @param {number} val
 * @return {void}
 */
myMinStack.prototype.push = function (val) {
  if (val <= this.min[this.min.length - 1] || this.min.length === 0) {
    this.min.push(val)
  }
  return this.stack.push(val)
};

/**
 * @return {void}
 */
myMinStack.prototype.pop = function () {
  const deleteValue = this.stack.pop();
  if (deleteValue === this.getMin()) this.min.pop()
  return deleteValue
};

/**
 * @return {number}
 */
myMinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
myMinStack.prototype.getMin = function () {
  return this.min[this.min.length - 1]
};


// Solution from marsprince https://leetcode.com/marsprince/
var MinStack = function () {
  this.arr = []
};

/** 
 * @param {number} val
 * @return {void}
 */

MinStack.prototype.push = function (val) {
  return this.arr.push(
    {
      value: val,
      min: this.arr.length === 0 ? val : Math.min(val, this.getMin()),
    })
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  return this.arr.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.arr[this.arr.length - 1].value
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.arr[this.arr.length - 1].min
};