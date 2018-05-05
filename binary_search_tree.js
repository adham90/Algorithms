class Tree {
  constructor() {
    this.root = null;
  }

  add(value) {
    if (this.root === null) {
      this.root = new Node(value);
      return;
    }

    let current = this.root;
    while(true) {
      console.log("old " + current.value)
      if (current.value === value) {
        current.right = new Node(value)
        console.log("== " + value);
        return
      }

      if (current.value > value) {
        if (current.left === null) {
          current.left = new Node(value)
          console.log("left " + value)
          return
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = new Node(value)
          console.log("right " + value);
          return
        }
        current = current.right;
      }
    }
  }

  find(value) {
    let current = this.root;
    while (true) {
      if (current.value === value) {
        return console.log("found " + current.value)
      }

      if (current.value > value) {
        if (current.left === null) {
          return console.log(value + " can not be found");
        }
        current = current.left

      } else {
        if (current.right === null) {
          return console.log(value + " can not be found");
        }

        current = current.right
      }
    }
  }
}

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left  = left;
    this.right = right;
  }
}

let tree = new Tree()
tree.add(10)
tree.add(5)
tree.add(4)
tree.add(11)
tree.add(11)
tree.add(12)
tree.find(4)
tree.find(9)
