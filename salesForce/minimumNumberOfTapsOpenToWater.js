/**
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */
// Not solve yet !!
var minTaps_4 = function (n, ranges) {
  let gorden = n + 1

  for (let i = 0; i < n; i++) {
    let left = i - ranges[i]
    // left = left > 0 ? left : 0
    let right = i + ranges[i]
    // if (interval >= n + 1) return i
    for (let idx = left; idx <= right; idx++) {
      console.log("i", i, "idx", idx, "gorden", gorden)
      gorden = gorden - 1

      if (gorden === 0) return i
    }
  }
  return -1
};



var minTaps_1 = function (n, ranges) {
  let interval = 0
  let gorden = {}
  // gorden[2] = 4
  // gorden[3] = 3

  for (let idx in ranges) {
    // console.log("nn", idx);
    gorden[idx] = false;
  }
  // for (let t in gorden) {
  //   console.log(t)
  // }
  for (let i = 0; i < n; i++) {
    let left = i - ranges[i]
    let right = i + ranges[i]
    interval = left > 0 ? interval + right - left : interval + right
    // if (interval >= n + 1) return i
    console.log("idx", i, "left", left, "right", right)
  }
  // console.log("gorden", gorden)
  return gorden
};


var minTaps = function (n, ranges) {
  let gorden = {}
  // gorden[2] = 4
  // gorden[3] = 3
  for (let i = 0; i <= n; i++) {
    gorden[i] = false
  }

  for (let i = 0; i <= n; i++) {
    let left = i - ranges[i]
    let right = i + ranges[i]
    for (let idx = left; idx <= right; idx++) {
      if (gorden[idx] === undefined) continue
      delete gorden[idx];
      if (Object.keys(gorden).length === 0) return i
      if (idx === right) gorden[idx] = false
      // if (i === n) {
      //   delete gorden[idx];
      // } else {
      //   if (idx !== right) delete gorden[idx];
      // }

    }
  }
  return -1
};

// const ranges = [1, 2, 1, 0, 2, 1, 0, 1]
const ranges = [1, 2, 1, 0, 2, 1, 0, 1]
const n = 7;
console.log("gorden",
  minTaps(n, ranges)
)
