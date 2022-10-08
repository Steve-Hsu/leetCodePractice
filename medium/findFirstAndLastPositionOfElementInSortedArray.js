/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange_1 = function (nums, target) {
  let l = 0
  let r = nums.length - 1
  let arr = []

  if (nums.length === 1) {
    if (nums[l] === target) return [0, 0]
  }

  while (l < r) {


    if (nums[l] === target) {
      while (nums[l] === target) {
        if (arr.length === 0) arr.push(l)
        l++
      }
      arr.push(l - 1)
      return arr
    }
    if (nums[r] === target) {
      while (nums[r] === target) {
        if (arr.length === 0) arr.push(r)
        r--
      }
      arr.unshift(r + 1)
      return arr
    }
    let mid = Math.floor((l + r) / 2);

    if (nums[mid] === target) {
      let first = mid
      while (nums[first - 1] === target) {
        first--
      }
      while (nums[first] === target) {
        if (arr.length === 0) arr.push(first)
        first++
      }
      arr.push(first - 1)
      return arr
    }

    if (target > nums[mid]) {
      l = mid + 1
    } else {
      r = mid - 1
    }
  }
  return [-1, -1]

};

//
var searchRange = function (nums, target) {
  let l = 0, r = nums.length - 1, res = [], idx = l;

  if (nums.length === 1 && nums[l] === target) return [0, 0]

  while (l < r) {
    let mid = Math.floor((l + r) / 2); // make middle index

    if (nums[l] === target) idx = l;

    if (nums[mid] === target || nums[r] === target) {
      nums[mid] === target ?
        idx = mid : idx = r;
      while (nums[idx - 1] === target) idx--
    };

    // Push idx for res
    if (nums[idx] === target) {
      res.push(idx); // Push x of [x, y]
      while (nums[idx] === target) idx++; // Move idx to rightmost
      res.push(idx - 1) // Push y of [x, y]
      return res
    };

    // If target not matched, find new l, mid, r
    if (target > nums[mid]) {
      l = mid + 1 // search right
    } else {
      r = mid - 1 // search left
    };
  }

  return [-1, -1]
};

var searchRange = function (nums, target) {
  let l = 0, r = nums.length - 1, idx = l;

  if (nums.length === 1 && nums[l] === target) return [0, 0]

  while (l < r) {
    let mid = Math.floor((l + r) / 2); // make middle index

    if (nums[l] === target) idx = l;

    if (nums[mid] === target || nums[r] === target) {
      nums[mid] === target ?
        idx = mid : idx = r;
      while (nums[idx - 1] === target) idx--
    };

    // If target matched, Return result
    if (nums[idx] === target) {
      let x = idx; // first matched index
      while (nums[idx] === target) idx++; // Update idx to rightmost
      let y = idx - 1 // last matched index
      return [x, y]
    };

    // If target not matched, find new "l", "mid", and "r"
    if (target > nums[mid]) {
      l = mid + 1 // search right, current mid proved not the target, so exclude the mid
    } else {
      r = mid - 1 // search left, current mid may equal to target, so include the mid
    };
  }

  return [-1, -1]
};