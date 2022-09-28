/**
 * @param {number[]} height
 * @return {number}
 */

let H = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
// let H = [0, 1, 0, 2]
// let H = [0, 1, 0, 2, 1, 0, 1, 3]
// let H = [4, 3, 1, 2, 3]

// My solution, it worked well
var trap = function (h) {
  let idx = 0,
    water = 0,
    step = 0, // count for track back steps
    l = h[0], // default Left. 
    length = h.length

  while (idx < length) {
    let r = h[idx]   // Right traverse along the h(height)

    // If Right equals or higher than Left, track back from Right, 
    // take water from the sum of Left minus each track back value.
    if (r >= l) {
      let tk = idx
      while (step) {
        tk = tk - 1
        water = water + (l - h[tk]) // Take l as a limit to take water
        step--
      }
      l = r
      step = 0 // finish track back, default the step as 0
    }

    // If Right traverse to last item in h, and not yet meet any value equals or higher than Left,
    // track back to take water until hit Left.
    if (idx + 1 === length) {
      let tk = idx
      while (step) {
        tk = tk - 1
        if (h[tk] < r) water = water + (r - h[tk]);
        else r = h[tk]
        step--
      }
      return water
    }
    step++
    idx++
  }

  return water
};

console.log(
  trap(H)
)