// one is the wall
// 2 = point A
// 3 = point B
const MAZE = [
  [2, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 2]
]

const CLOSED  = 1
const NO_ONE  = 0
const BY_A    = 4
const BY_B    = 5
const A = [0, 0]
const B = [4, 4]

function findPath(maze, [xA, yA], [xB, yB]) {
  const visited = maze.map((row, y) =>
   row.map((origin, x) => ({
     closed: origin === CLOSED,
     length: 0,
     openedBy: NO_ONE,
     x,
     y
   }))
 );

  visited[xA][yA].openedBy = BY_A
  visited[xB][yB].openedBy = BY_B

  let aQueue = [visited[xA][yA]] // init val = 1
  let bQueue = [visited[xB][yB]] // init val = 1
  let ite = 0

  while (aQueue.length && bQueue.length) {
    ite++

    const aNeighbors = aQueue.reduce((acc, neighbor) => {
      return acc.concat(getNeighbors(visited, neighbor.x, neighbor.y))
    }, [])

    const bNeighbors = bQueue.reduce((acc, neighbor) => {
      return acc.concat(getNeighbors(visited, neighbor.x, neighbor.y))
    }, [])

    aQueue = bQueue = []

    for (var i = 0; i < aNeighbors.length; i++) {
      const neighbor = aNeighbors[i]
console.log(aNeighbors);
      if (neighbor.opendeBy === BY_B) {
        return neighbor.length + ite
      } else if (neighbor.opendeBy === NO_ONE) {
        neighbor.length = ite
        neighbor.opendeBy = BY_A
        aQueue.push(neighbor)
      }
    }

    for (var i = 0; i < bNeighbors.length; i++) {
      const neighbor = bNeighbors[i]

      if (neighbor.opendeBy === BY_A) {
        return neighbor.length + ite
      } else if (neighbor.opendeBy === NO_ONE) {
        neighbor.length = ite
        neighbor.opendeBy = BY_B
        bQueue.push(neighbor)
      }
    }
  }

  return -1
}

function getNeighbors(visited, x, y) {
  console.log("ooooo", visited[y][x + 1]);
  console.log(x, y);
  let neighbors = []
  if (x - 1 >= 0 && !visited[y][x - 1].closed) {
    // left
    neighbors.push(visited[y][x - 1])
  }

  if (x + 1 < visited[0].length && !visited[y][x + 1].closed) {
    // right
    neighbors.push(visited[y][x + 1])
  }

  if (y - 1 >= 0 && !visited[y - 1][x].closed) {
    // up
    neighbors.push(visited[y - 1][x])
  }

  if (y + 1 < visited.length && !visited[y + 1][x].closed) {
    // down
    neighbors.push(visited[y + 1][x])
  }
  return neighbors;
}
console.log(findPath(MAZE, A, B))
