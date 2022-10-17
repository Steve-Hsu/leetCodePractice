/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// My solution 
var merge = function (nums1, m, nums2, n) {
  let a = b = idx = 0
  const copy_nums1 = Array.from(nums1)

  for (let i = 0; i < m + n; i++) {
    const A = copy_nums1[a]
    const B = nums2[b]
    if (a < m) {
      if (A > B) {
        nums1[i] = B
        b++
      } else {
        nums1[i] = A
        a++
      }
    } else {
      nums1[i] = B
      b++
    }
  }
  nums1.length = m + n
};

// My solution_2
var merge = function (nums1, m, nums2, n) {
  nums1.length = m
  nums2.length = n
  nums1.push(...nums2)
  nums1.sort((a, b) => a - b)
};

// Other solution 
// Solution from https://leetcode.com/ngflanders/
// Inserting into the back of the nums1 we only need to insert until we run out of nums2 since everything else is already inplace at the front of nums1
var merge = function (nums1, m, nums2, n) {
  var insertPos = m + n - 1;
  m--; n--;
  while (n >= 0) {
    nums1[insertPos--] = (nums1[m] > nums2[n]) ? nums1[m--] : nums2[n--];
  }
};