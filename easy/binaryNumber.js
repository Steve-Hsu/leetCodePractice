

const num = 110
// Get binary number
function convertToBinary(x) {
  let bin = 0;
  let rem, i = 1, step = 1;
  while (x != 0) {
    rem = x % 2;
    // console.log(
    //   `Step ${step++}: ${x}/2, Remainder = ${rem}, Quotient = ${parseInt(x / 2)}`
    // );
    x = parseInt(x / 2);
    bin = bin + rem * i;
    i = i * 10;
  }
  return bin
}

console.log("number is : ", num)
console.log("Binary : ",
  convertToBinary(num)
)
// Count how many 1 in a binary number
const popCount = (x) => {
  let count;
  for (count = 0; x != 0; ++count) {
    x &= x - 1
  }
  return count
}

console.log("popCount", popCount(num))


const checkOdd = (x) => {
  return x & 1 ? true : false;
}

console.log(`${num} is odd?`, checkOdd(num))