/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
// https://leetcode.com/problems/minimum-time-to-make-rope-colorful/
// My solution 
var minCost = function (colors, neededTime) {
  let time = 0
  let l = 0
  let r = l + 1
  while (r < colors.length) {
    if (colors[l] === colors[r]) {
      if (neededTime[l] < neededTime[r]) {
        time = time + neededTime[l]
        l = r
        r = l + 1
      } else {
        time = time + neededTime[r]
        r++
      }
    } else {
      l = r
      r = l + 1
    }
  }
  return time
};

var minCost = function (colors, neededTime) {
  let time = 0
  let l = 0
  let r = 0
  while (r++ < colors.length) {
    if (colors[l] === colors[r]) {
      if (neededTime[l] < neededTime[r]) {
        time += neededTime[l]
        l = r
      } else {
        time += neededTime[r]
      }
    } else {
      l = r
    }
  }
  return time
};
// My solution for version
var minCost = function (colors, neededTime) {
  let time = 0
  for (let l = 0, r = 1; r < colors.length; r++) {
    if (colors[l] === colors[r]) {
      if (neededTime[l] < neededTime[r]) {
        time += neededTime[l]
        l = r
      } else {
        time += neededTime[r]
      }
    } else {
      l = r
    }
  }
  return time
};

var minCost = function (colors, neededTime) {
  let time = 0
  for (let l = 0, r = 1; r < colors.length; r++) {
    if (colors[l] != colors[r]) l = r

    if (colors[l] === colors[r]) {
      if (neededTime[l] < neededTime[r]) {
        time += neededTime[l]
        l = r
      } else {
        time += neededTime[r]
      }
    }
  }
  return time
};

var minCost = function (colors, neededTime) {
  let time = 0
  for (let l = 0, r = 1; r < colors.length; r++) {
    if (colors[l] != colors[r]) {
      l = r
      continue // Jump to next loop if the color of bloom is not repeated
    }
    const cost = Math.min(neededTime[l], neededTime[r])
    if (cost === neededTime[l]) l = r
    time += cost
  }
  return time
};

var minCost = function (colors, neededTime) {
  let time = 0
  for (let l = 0, r = 1; r < colors.length; r++) {
    if (colors[l] === colors[r]) {
      let cost = neededTime[r]
      if (neededTime[l] < neededTime[r]) {
        cost = neededTime[l]
        l = r
      }
      time += cost
    }
    if (colors[l] != colors[r]) l = r
  }
  return time
};

var minCost = function (colors, neededTime) {
  let time = 0
  for (let l = 0, r = 1; r < colors.length; r++) {
    if (colors[l] === colors[r]) {
      const cost = Math.min(neededTime[l], neededTime[r])
      if (cost === neededTime[l]) l = r
      time += cost
    }
    if (colors[l] != colors[r]) l = r
  }
  return time
};

var minCost = function (colors, neededTime) {
  let time = 0
  for (let l = 0, r = 1; r < colors.length; r++) {
    if (colors[l] === colors[r]) {
      const cost = Math.min(neededTime[l], neededTime[r])
      if (cost === neededTime[l]) l = r
      time += cost
    }
    else l = r
  }
  return time
};


// from https://leetcode.com/HimanshuBhoir/
// Best solution, fast neat and easy to understand
// Same logic as mine, but directly swap the neededTime,
var minCost = function (colors, neededTime) {
  let min_time = 0;
  for (let i = 1; i < neededTime.length; i++) {
    if (colors[i] == colors[i - 1]) {
      min_time += Math.min(neededTime[i], neededTime[i - 1]);
      neededTime[i] = Math.max(neededTime[i], neededTime[i - 1]);
    }
  }
  return min_time;
};

// Other solution 
// from https://leetcode.com/Sporkyy/
const minCost = (s, cost) => {
  let res = 0;
  for (let i = 0, max = 0; i < s.length; i++) {
    res += cost[i];
    max = Math.max(max, cost[i]);
    if (s[i] !== s[i + 1]) {
      res -= max;
      max = 0;
    }
  }
  return res;
};
