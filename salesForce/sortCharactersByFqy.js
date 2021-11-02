/**
 * @param {string} s
 * @return {string}
 */
const s = "trueeikeAbkk"
// My solution
var frequencySort = function (s) {
  let str = s.split("").sort()
  let map = {}
  for (v of str) {
    map[v] ? map[v]++ : map[v] = 1
  }
  let map2 = {}
  Object.keys(map).map((i) => {
    let value = "";

    // Alter this line with built-in function string.repeat(N)
    // for (let loop = 0; loop < map[i]; loop++) value = value + i
    value = i.repeat(map[i])

    map2[map[i]] ? map2[map[i]] += value : map2[map[i]] = value
  })
  let ans = ""

  Object.keys(map2).sort((a, b) => b - a).map((i) => {
    ans = ans + map2[i]
  })

  return ans

};


// Faster and in 3 lines Solution
// From ybmlk https://leetcode.com/problems/sort-characters-by-frequency/discuss/645949/JavaScript-Clean-3-liner-Solution
var frequencySort_1 = function (s) {

  // Count how many time each character appears and form a map
  const charMap = s.split('').reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc
  }, {})

  // console.log("charMap", charMap)

  // Get the keys sorted and form an array.
  const sortedArr = Object.keys(charMap).sort((a, b) => charMap[b] - charMap[a]);


  // console.log("sortedArr", sortedArr)

  // return an string
  return sortedArr.reduce((acc, cur) => acc + cur.repeat(charMap[cur]), '')
};


// Solution from casmith1987 https://leetcode.com/problems/sort-characters-by-frequency/discuss/1535273/JavaScript-98.25-or-One-Liner-and-More-Readable-Version
var frequencySort_2 = function (s) {
  const frequency = s.split('').reduce((obj, val) => {
    obj[val] = obj[val] + 1 || 1;
    return obj
  }, {});

  console.log("the object", frequency)

  let test = Object.entries(frequency).sort(([_, fx], [__, fy]) => fx <= fy ? 1 : -1);
  console.log("result sorted by value :", test)

  return Object.entries(frequency)
    .sort(([_, fx], [__, fy]) => fx <= fy ? 1 : -1)
    .map(([char, freq]) => char.repeat(freq))
    .join('');
};

console.log(
  frequencySort_2(s)
)
