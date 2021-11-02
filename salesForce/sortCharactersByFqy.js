/**
 * @param {string} s
 * @return {string}
 */
const s = "trueeikeAbkk"
// My solution_1
var frequencySort = function (s) {
  let str = s.split("").sort()
  let map = {}
  for (v of str) {
    map[v] ? map[v]++ : map[v] = 1
  }
  let map2 = {}
  Object.keys(map).map((i) => {
    let value = "";
    for (let loop = 0; loop < map[i]; loop++) value = value + i
    map2[map[i]] ? map2[map[i]] += value : map2[map[i]] = value
  })
  let ans = ""

  Object.keys(map2).sort((a, b) => b - a).map((i) => {
    ans = ans + map2[i]
  })

  return ans

};

console.log(
  frequencySort(s)
)
