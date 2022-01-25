/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */


var findLeastNumOfUniqueInts = function (arr, k) {
  let map = {}
  for (i of arr) {
    map[i] = map[i] ? map[i] + 1 : 1
  }
  let n = k

  for (key of Object.keys(map)) {
    if (map[key] === 1 && n > 0) {
      delete map[key]
      n = n - 1
    }
    console.log("for, map", map)
  }

  while (n) {
    if (map[Object.keys(map)[0]] > 1) {
      map[Object.keys(map)[0]] = map[Object.keys(map)[0]] - 1
    } else {
      delete map[Object.keys(map)[0]]
    }

    n = n - 1
    console.log('map', map)
  }

  return Object.keys(map).length
};

const arr = [4, 3, 1, 1, 3, 3, 2]
const k = 3

console.log(
  findLeastNumOfUniqueInts(arr, k)
)



// Other solutions
// From https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/discuss/1076980/JS-Dictionary-%2B-Sort
var findLeastNumOfUniqueInts = function (arr, k) {
  arr.sort()
  const counts = arr.reduce((acc, curr) => {
    acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
    return acc;
  }, {});

  arr.sort((a, b) => counts[a] - counts[b]);
  return new Set(arr.slice(k)).size;
};


// from https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/discuss/864020/Very-Easy-JS-Solution
// Fast solution
var findLeastNumOfUniqueInts_3 = function (arr, k) {
  let m = new Map();
  arr.forEach(num => m.set(num, m.get(num) + 1 || 1));
  let occurrences = Array.from(m.values());
  occurrences.sort((a, b) => a - b);
  let res = occurrences.length;
  for (let num of occurrences) {
    if (k >= num) {
      k -= num;
      res--;
    }
    else return res;
  }
  return res;
  // Time Complexity: O(nlog(n))
  // Space Complexity: O(n)
};

console.log(
  findLeastNumOfUniqueInts_3(arr, k)
)