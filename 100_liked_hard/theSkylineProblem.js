/**
 * input arrs
 * Unit : [x1, x2, y], x1 = left edge in horizental point, x2 right edge, y = the height of builds 
 * The unit can be considered as [l, r, h]
 * 
 * 1.) First key point of the block
 * [curr_x1, curr_y]
 * No matter how many builds before it or not, you can always take the x1 and y of the 1st building in block as the 1st key point of skylines of the block
 * 2.) Key point between buildings in same block.
 * 2-1.)[curr_x1, curr_y] 
 * Compare current y(height) with y of previous buildings, if current higher, then take current [curr_x1, curr_y] as key point.
 * 2-2.)[pre_y2, curr_h]
 * If current y is smaller, then take the previous y2 and current h as the key point [pre_y2, curr_h]
 * 
 * 3.) If buildings overlap as a block.
 * Compare 2 buildings, b1 and b2. 
 * If yes, create a finish point of the previous block [curr_y2, 0], also needed when next is null
 * If not, create a 1st key point of block [curr_x1, curr_y]
 * 3-1.) If x2 of b1 smaller than x1 of b2, then this 2 builds overlap each other. 
 * We see the overlaped builds as a block. the Block has Its left and right edge.
 * 3-2.) Then Compare the x2 of of b1 and b2, take the greater one as the x2(right edge) of the block.
 * So on, take the x2(right edge of the block) to compare to the x1 of next building. 
 * If the x1 of next building greater than the x2 of the block, then we konw they on diffrent block.
 * 
 */

var getSkyline_1 = function (buildings) {
  let idx = 0
  let length = buildings.length
  let res = []
  let isBlock = false
  let block_r_edge;
  let pre_h_max = 0

  while (idx < length) {
    let curr = buildings[idx]
    let pre = buildings[idx - 1]
    let p_l = pre?.[0] || 0
    let p_r = pre?.[1] || 0
    let p_h = pre?.[2] || 0


    if (block_r_edge >= curr[0]) isBlock = true
    else isBlock = false

    if (!isBlock) pre_h_max = curr[2]

    console.log(pre_h_max)
    // Check if the block right edge is farer
    if (block_r_edge < curr[1]) block_r_edge = curr[1]


    // console.log(curr, "is block", isBlock, "right edge", block_r_edge)
    if (pre && p_l) {

      // Check if same block



      if (isBlock === false) {
        res = [...res, [pre[1], 0], [curr[0], curr[2]]]
      }





      // Check height, only when the left edge of building is different and pre have 
      if (pre[0] < curr[0]) {
        if (pre[2] < curr[2] && isBlock) {
          res.push([curr[0], curr[2]])
        }
        if (pre[2] > curr[2] && isBlock) {
          res.push([pre[1], curr[2]])
        }
      }

      if (pre[0] === curr[0]) {

        if (pre[2] < curr[2] && isBlock) {
          res.pop()
          res.push([curr[0], curr[2]])
        }
        console.log("h")
        if (curr[2] === pre_h_max && res.length >= 2) res.pop()
      }

    }

    if (!pre) {
      // 1st building in the buildings
      res.push([curr[0], curr[2]])
      block_r_edge = curr[1]
    }

    // last key point in the last buliding of buildings
    // console.log("pre", pre_h_max, "cu", curr[2])
    if (isBlock) pre_h_max = Math.max(pre_h_max, curr[2])

    idx++
  }
  res.push([buildings[idx - 1][1], 0])
  return res
};


var getSkyline = function (buildings) {
  let idx = 0
  let length = buildings.length
  let res = []
  let isBlock = false
  let block_r_edge;
  let pre_h_max = 0

  while (idx < length) {
    let curr = buildings[idx]
    let pre = buildings[idx - 1]
    let p_l = pre?.[0] || 0
    let p_r = pre?.[1] || 0
    let p_h = pre?.[2] || 0


    if (block_r_edge >= curr[0]) isBlock = true
    else isBlock = false

    if (!isBlock) pre_h_max = curr[2]

    console.log(pre_h_max)
    // Check if the block right edge is farer
    if (block_r_edge < curr[1]) block_r_edge = curr[1]


    // console.log(curr, "is block", isBlock, "right edge", block_r_edge)
    if (pre && p_l) {

      // Check if same block



      if (isBlock === false) {
        res = [...res, [pre[1], 0], [curr[0], curr[2]]]
      }





      // Check height, only when the left edge of building is different and pre have 
      // Here 100% ok
      if (pre[0] < curr[0]) {
        if (pre[2] < curr[2] && isBlock) {
          res.push([curr[0], curr[2]])
        }
        if (pre[2] > curr[2] && isBlock) {
          res.push([pre[1], curr[2]])
        }
      }

      // if (pre[0] === curr[0]) {
      //   if (pre[2] < curr[2] && isBlock) {
      //     res.pop()
      //     res.push([curr[0], curr[2]])
      //   }
      //   console.log("h")
      //   if (curr[2] === pre_h_max && res.length >= 2) res.pop()
      // }

      if (pre[0] === curr[0] && pre[1] === curr[1]) {
        let height = Math.max(res[res.length - 1][1], curr[2])
        // console.log("height", height, "curr", curr[1], curr)
        res[res.length - 1][1] = height
      } else if (pre[0] === curr[0]) {
        if (pre[2] < curr[2] && isBlock) {
          res.pop()
          res.push([curr[0], curr[2]])
        }
        console.log("h")
      }
      // if (curr[2] === pre_h_max && res.length >= 2) res.pop()
    }

    if (!pre) {
      // 1st building in the buildings
      res.push([curr[0], curr[2]])
      block_r_edge = curr[1]
    }

    // last key point in the last buliding of buildings
    // console.log("pre", pre_h_max, "cu", curr[2])
    if (isBlock) pre_h_max = Math.max(pre_h_max, curr[2])

    idx++
  }
  res.push([buildings[idx - 1][1], 0])
  return res
};

// let b = [[2, 9, 10], [3, 7, 15], [5, 12, 12], [15, 20, 10], [19, 24, 8]]
// return [[2, 10], [3, 15], [7, 12], [12, 0], [15, 10], [20, 8], [24, 0]]

// let b = [[0, 2, 3], [2, 5, 3]]
// return [[0, 3], [5, 0]]

// let b = [[2, 9, 10], [9, 12, 15]]
// return [[2,10],[9,15],[12,0]]

// let b = [[1, 2, 1], [1, 2, 2], [1, 2, 3]]
// return [[1, 3], [2, 0]]

// let b = [[0, 2, 3], [2, 4, 3], [4, 6, 3]] // 3 builds as a block and all with same height
// return [[0,3],[6,0]]


let b = [[1, 2, 1], [1, 2, 2], [1, 2, 3], [2, 3, 1], [2, 3, 2], [2, 3, 3]]
// return [[1,3],[3,0]]

// let b = [[1, 5, 3], [1, 5, 3], [1, 5, 3]]
// // return [[1, 3], [5, 0]]

// let b = [[2, 4, 7], [2, 4, 5], [2, 4, 6]]
// return [[2, 7], [4, 0]]

// let b = [[1, 2, 1], [1, 2, 2], [1, 2, 3]]
// return [[1, 3], [2, 0]]

console.log(
  getSkyline(b)
)