/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// Solution - Map
// The 3 solutions below from hbiORbj https://leetcode.com/problems/group-anagrams/discuss/718955/Three-JS-Solutions
var groupAnagramsByMap_1 = function (strs) {
  let obj = {}
  for (str of strs) {
    let string = str.split("").sort().join();
    obj[string] ? obj[string].push(str) : obj[string] = [str]
  }
  return Object.values(obj)
};
// Time Complexity: O(n*klog(k)) where n is the length of input array and k is the maximum length of a string in input array
// Space Complexity: O(n)

var groupAnagramsByMap_2 = function (strs) {
  let m = new Map();
  for (let str of strs) {
    let sorted = str.split("").sort().join("");
    if (m.has(sorted)) m.set(sorted, [...m.get(sorted), str]);
    else m.set(sorted, [str]);
  }
  return Array.from(m.values());
};
// Time Complexity: O(n*klog(k)) where n is the length of input array and k is the maximum length of a string in input array
// Space Complexity: O(n)

var groupAnagramsByMap_3 = function (strs) {
  let res = {};
  for (let str of strs) {
    let count = new Array(26).fill(0);
    for (let char of str) count[char.charCodeAt() - 97]++;
    let key = count.join("#");
    res[key] ? res[key].push(str) : res[key] = [str];
  }
  return Object.values(res);
};
// Time Complexity: O(n*k) where n is the size of input array and k is the maximum length of string in input array
// Space Complexity: O(n)