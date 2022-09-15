// https://www.youtube.com/watch?v=tWVWeAqZ0WU&t=2538s

// depthFirst
const depthFirstPrint = (graph, source) => {
  const stack = [source];
  while (stack.length > 0) {
    const current = stack.pop();
    console.log(current)
    for (let neighbor of graph[current]) {
      stack.push(neighbor)
    }
  }
}
// depthFirstPrint(graph, "a") // Print "acebdf"

// recursion version
const depthFirstPrintRecursion = (graph, source) => {
  console.log(source)
  for (let neighbor of graph[source]) {
    depthFirstPrintRecursion(graph, neighbor)
  }
}

const graph = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: []
};


// depthFirstPrintRecursion(graph, "a") // Print "abdfce"

// breadthFirst
const breadthFirstPrint = (graph, source) => {
  const queue = [source];
  while (queue.length > 0) {
    const current = queue.shift();
    console.log(current)
    for (let neighbor of graph[current]) {
      queue.push(neighbor)
    }
  }
}
breadthFirstPrint(graph, "a") // Print "abcdef"