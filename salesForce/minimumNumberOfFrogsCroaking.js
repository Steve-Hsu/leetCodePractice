/**
 * @param {string} croakOfFrogs
 * @return {number}
 */

// const croakOfFrogs = "croakcroak"
// const croakOfFrogs = "crocakcroraoakk"
const croakOfFrogs = "cccrrocarkooraakkoak"

var minNumberOfFrogs = function (croakOfFrogs) {
  if (croakOfFrogs.length % 5) return -1
  let maxMumFrogs = 0
  let map = []
  for (v of ["c", "r", "o", "a", "k"]) map[v] = 0;

  for (let i = 0; i < croakOfFrogs.length; i++) {
    map[croakOfFrogs[i]] += 1

    // Check the order of string croack
    if (
      map.c < map.r ||
      map.r < map.o ||
      map.o < map.a ||
      map.a < map.k
    ) return -1;

    if (croakOfFrogs[i] === "c") {
      maxMumFrogs = Math.max(map.c - map.k, maxMumFrogs)
    }
  }

  // console.log("map", map)
  for (v of ["c", "r", "o", "a", "k"]) {
    if ([map[v]] > croakOfFrogs.length / 5) return -1
  }
  return maxMumFrogs
};
// My solution v2
var minNumberOfFrogs_3 = function (croakOfFrogs) {
  if (croakOfFrogs.length % 5) return -1
  let maxMumFrogs = 0
  const map = { c: 0, r: 0, o: 0, a: 0, k: 0 };

  for (let i = 0; i < croakOfFrogs.length; i++) {
    map[croakOfFrogs[i]] += 1

    // Check the order of string croack
    if (
      map.c < map.r ||
      map.r < map.o ||
      map.o < map.a ||
      map.a < map.k
    ) return -1;

    if (croakOfFrogs[i] === "c") {
      maxMumFrogs = Math.max(map.c - map.k, maxMumFrogs)
    }
  }

  for (v of ["c", "r", "o", "a", "k"]) {
    if ([map[v]] > croakOfFrogs.length / 5) return -1
  }
  return maxMumFrogs
};

console.log(
  minNumberOfFrogs(croakOfFrogs)
)

// Solution from ybmlk https://leetcode.com/problems/minimum-number-of-frogs-croaking/discuss/1160830/JavaScript-Intuitive-O(1)-Space-Linear-Time-Solution
var minNumberOfFrogs_1 = function (croakOfFrogs) {
  if (croakOfFrogs.length % 5 !== 0) return -1;
  const map = { 'c': 0, 'r': 1, 'o': 2, 'a': 3, 'k': 4 };
  const count = Array(4).fill(0);
  let totalFrogs = 0;
  let maxFrogCount = 0;

  for (let c of croakOfFrogs) {
    const idx = map[c];
    if (idx === 0) {
      count[idx]++;
      totalFrogs++;
      maxFrogCount = Math.max(maxFrogCount, totalFrogs);
    } else {
      if (count[idx - 1] === 0) return -1;
      count[idx - 1]--;
      if (idx === 4) totalFrogs--;
      else count[idx]++;
    }
  }
  return maxFrogCount;
};

// Solution from ehdwn1212 https://leetcode.com/problems/minimum-number-of-frogs-croaking/discuss/903797/JavaScript-Solution
let minNumberOfFrogs_2 = (S) => {
  const cnt = { c: 0, r: 0, o: 0, a: 0, k: 0 };
  let max = -Infinity;

  for (const c of S) {
    if (!(cnt.c >= cnt.r && cnt.r >= cnt.o && cnt.o >= cnt.a && cnt.a >= cnt.k)) return -1;
    cnt[c]++;
    if (c === 'c') max = Math.max(max, cnt.c - cnt.k);
  }

  return cnt.c == cnt.r && cnt.r == cnt.o && cnt.o == cnt.a && cnt.a == cnt.k ? max : -1;
};