/**
 * @param {string} dominoes
 * @return {string}
 */
// function ListNode(val, next) {
//   this.val = (val === undefined ? 0 : val)
//   this.next = (next === undefined ? null : next)
// }

// my solution_1, works, but very slow
var pushDominoes = function (dominoes) {
  let arr = dominoes.split("")
  let queue = []
  let length = arr.length

  // Make memo for R and L
  for (let i = 0; i < length; i++) {
    if (arr[i] === "R") {
      queue.push({ key: "R", idx: i })
    }
    if (arr[i] === "L") {
      queue.push({ key: "L", idx: i })
    }
  }

  let curr = queue.shift()

  while (curr) {

    if (curr.key === "R") {
      let domino = arr[curr.idx + 1]
      let right_next_domino = arr[curr.idx + 2]
      if (domino === ".") {
        if (right_next_domino !== "L") {
          arr[curr.idx + 1] = "R"
          curr.idx += 1
          queue.push(curr)
        } else if (right_next_domino === "L") {
          queue.shift()
        }
      }
    }
    else {
      let domino = arr[curr.idx - 1]
      if (domino === ".") {
        arr[curr.idx - 1] = "L";
        curr.idx -= 1
        queue.push(curr)
      }
    }
    curr = queue.shift()
  }

  return arr.join("")
};


// My solution_2 works, better than my solution_1
var pushDominoes = function (dominoes) {
  let arr = dominoes.split("")
  let length = arr.length
  let last_R = Infinity
  let last_L = -Infinity
  let i = 0

  // Make memo for R and L
  while (i < length) {
    let curr = arr[i]
    if (curr === "R") {
      while (last_R < i) {
        last_R += 1
        arr[last_R] = "R"
      }
      last_R = i

      // If the next of next is L, then skip to that position
      if (arr[i + 2] === "L") {
        i = i + 2
        last_R = Infinity
        last_L = i
      }
    }
    else if (curr === "L") {
      // After R appeared and meet L
      if (i > last_R) {
        let r = last_R + 1
        let l = i - 1
        while (r < l) {

          if (arr[r + 1] === "L") {
            i = r + 1
            break // 2 steps later if meet L
          }
          arr[r] = "R"
          arr[l] = "L"
          r++
          l--
        }
        last_R = Infinity;
      }
      else {
        // L to L or L to the start
        let l = i - 1
        while (l >= 0 && l > last_L) {
          if (arr[l] === "R") break
          arr[l] = "L"
          l--
        }

      }
      last_L = i
    } else if (i + 1 === length) {
      // When to the last and R meet nothing
      while (last_R < i) {
        last_R += 1
        arr[last_R] = "R"
      }
    }
    i++
  }
  return arr.join("")
};

// let d = ".L.R...LR..L.."
// let d = "R...R..."
let d = "R.R.L"
console.log(
  pushDominoes(d)
)

// My solution_2 works, better than my solution_1
var pushDominoes = function (dominoes) {
  let arr = dominoes.split(""),
    length = arr.length,
    last_R = Infinity,
    last_L = -Infinity,
    i = 0;

  // Make memo for R and L
  while (i < length) {
    let curr = arr[i]
    if (curr === "R") {
      // Remeber the idx of current "R", when there are no "R" before it.
      if (last_R === Infinity) last_R = i

      // Push the dominoes from last "R" toward to current "R".
      while (last_R < i) arr[last_R++] = "R"

      // If the next of next dominoes is L, then skip to that L
      if (arr[i + 2] === "L") {
        [i, last_R, last_L] = [i + 2, Infinity, i + 2]
      }
    }
    else if (curr === "L") {
      // Push the dominoes from current "L" back to last "R"
      if (i > last_R) {
        let [r, l] = [last_R + 1, i - 1]
        while (r < l) {
          // If the right next of the current "." is "L", the skip to that L and stop loop
          if (arr[r + 1] === "L") {
            i = r + 1
            break
          }
          // Push the dominoes "." which's near "R" as "R" and "." which's near "L" as "L"
          [arr[r++], arr[l--]] = ["R", "L"]
        }
        last_R = Infinity;
      }
      else {
        // Push the dominoes from current "L" back to , 
        //when there are no "L" before it
        let l = i - 1
        while (l >= 0 && l > last_L) {
          if (arr[l] === "R") break
          arr[l--] = "L"
        }
      }
      last_L = i
    }
    else if (i + 1 === length) {
      // Push the dominoes from last "R" toward all the way to the end, 
      // when there are no any "L" or "R" between the last "R" and end
      while (last_R < i) arr[++last_R] = "R"
    }
    i++
  }
  return arr.join("")
};

// Other solution, neat and smart
// from Slasla https://leetcode.com/shkvorets/
// 2 pointer
var pushDominoes = function (dominoes) {
  let l = 0, r = 1;
  const arr = ("L" + dominoes + "R").split("");
  while (l < arr.length - 1) {
    while (arr[r] == '.')
      r++;
    if (arr[l] == arr[r])
      for (let i = l + 1; i < r; i++)
        arr[i] = arr[l];
    if (arr[l] > arr[r])
      for (let i = 1; i <= (r - l - 1) / 2; i++) {
        arr[l + i] = 'R';
        arr[r - i] = 'L';
      }
    l = r++;
  }
  return arr.slice(1, arr.length - 1).join("");
};