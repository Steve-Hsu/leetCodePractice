/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
// Notice: For this question have some default functions, so you can't run it in normal node environment
// Solution from https://leetcode.com/problems/flatten-nested-list-iterator/discuss/1156268/JS-Python-Java-C%2B%2B-or-Simple-Queue-Solution-w-Explanation
class NestedIterator {
  constructor(nestedList) {
    this.data = []
    this.flatten(nestedList)
  };

  flatten(list) {
    for (let el of list)
      if (el.isInteger()) this.data.push(el.getInteger())
      else this.flatten(el.getList())
  };

  hasNext() { return this.data.length };

  next() { return this.data.shift() };
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
*/

const t = new NestedIterator(nestedList), a = [];
while (t.hasNext()) a.push(t.next())
console.log("a", a)