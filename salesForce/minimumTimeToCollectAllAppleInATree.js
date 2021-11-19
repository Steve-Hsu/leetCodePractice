/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */


const edges = [[0, 1], [0, 2], [1, 4], [1, 5], [2, 3], [2, 6]]
// const edges = [[0, 1], [1, 2], [0, 3]]
// const n = edges.length

// const hasApple = [true, true, true, true]

const hasApple = [false, false, true, false, false, true, false]
const n = hasApple.length

// My solution, it works but runtime super slow, however, the memory usage is very lower.
var minTime = function (n, edges, hasApple) {

  let path = [].concat.apply([], edges)
  let set = new Set()
  let hasAppleNode = []
  for (let x = 0; x < n; x++) {
    if (hasApple[x] && x > 0) {
      hasAppleNode.push(x)
    }
  }

  for (v of hasAppleNode) {
    let curr = v
    set.add(curr)
    while (curr > 0) {
      set.add(curr)
      curr = path[path.indexOf(curr) - 1]
      if (set.has(curr)) break;
    }
  }
  return set.size * 2
};

console.log(minTime(n, edges, hasApple))


// Best Solution / Runtime 96% faster, Meomory usage 100% less than other javascript online solution
// From leonenko https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/discuss/623786/C%2B%2BCJavaJavascript-simple-map-solution-no-recursion-bottom-up
var minTime_2 = function (n, edges, hasApple) {
  const m = {};
  // After My test, we don't need this line to sort edges
  // edges.sort((a, b) => a[0] - b[0]);
  for (let edge of edges)
    if (m[edge[1]] !== undefined)
      m[edge[0]] = edge[1];
    else
      m[edge[1]] = edge[0];

  let result = 0;
  for (let i = 0; i < hasApple.length; ++i) {
    if (!hasApple[i]) continue;
    let p = i;
    while (p != 0 && m[p] >= 0) {
      const temp = m[p];
      m[p] = -1; // mark as visited
      p = temp;
      result += 2;
    }
  }
  return result;
};

// Test
const testMap = (edges) => {
  const m = {};
  edges.sort((a, b) => a[0] - b[0]);
  for (let edge of edges)
    if (m[edge[1]] !== undefined)
      m[edge[0]] = edge[1];
    else
      m[edge[1]] = edge[0];
  return m
}

console.log(
  testMap(edges)
)