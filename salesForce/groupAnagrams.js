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


//Solution without sorting 
// By liushuaimaya https://leetcode.com/problems/group-anagrams/discuss/327706/javascript-7-line-solution-using-Primes-beats-99.8-without-sorting
/**
 * @param {string[]} strs
 * @return {string[][]}
 *
 * key point: 
 * prime multiply prime is unique, each char canbe represented by a prime
 * since [a-z] to  [0-25]
 * use `[charCodeAt() - 97]` to get unique index from the prime array
 * the prodcut can be set to the key name "prod"
 **/
var groupAnagrams_4 = function (strs) {
  const map = {};
  const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101];
  strs.forEach(str => {
    let prod = str.split("").reduce((r, c) => r * primes[c.charCodeAt() - 97], 1);
    map[prod] ? map[prod].push(str) : map[prod] = [str];
  });
  return Object.values(map);
};