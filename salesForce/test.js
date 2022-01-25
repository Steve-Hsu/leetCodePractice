const fun = (n) => {
  let t = {}
  for (let i in n) {
    t[i] = i
  }
  console.log(t)
}
fun([1, 2, 3])