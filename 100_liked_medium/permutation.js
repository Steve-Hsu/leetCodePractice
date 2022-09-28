/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute_fail = function (nums) {
  // nums.sort((a, b) => a - b)
  let reverse = nums.slice("").reverse()

  const arr = () => {
    let length = nums.length
    if (length === 1) return nums
    let s = []
    let temp = nums
    let swapTime = nums.length - 1
    // let temp = [1, 2, 3]

    while (length) {

      for (let i = swapTime; i >= 1; i--) {
        s.push(temp.slice("")) // temp.slice("") for .slice return a new arr, so we cut the inharitance between temps in "s"
        let a = temp[0]
        let b = temp[i]
        temp[0] = b
        temp[i] = a

      }
      length--
    }
    return s
  }

  return [...arr(nums), ...arr(reverse)]
};

//e


// LeetCode Solution 
var permute = function (nums) {


  //   function backtrack(first){
  //     if (first === 0){
  //       output.push()
  //     }
  //     for(let i = 0; )
  //   }
  // };
}
let arr = [5, 4, 6, 2]

console.log(
  permute(arr)
)