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

  preorder(array = [], node = undefined) {
    if (node === undefined) {
      node = this.root
    } else if (!node) {
      return array
    }
    array.push(node.value)
    array = this.preorder(array, node.left)
    array = this.preorder(array, node.right)
    return array;
  }

  inorder(array = [], node = undefined) {
    if (node === undefined) {
      node = this.root
    } else if (!node) {
      return array
    }
    array = this.inorder(array, node.left)
    array.push(node.value)
    array = this.inorder(array, node.right)
    return array;
  }

  postorder(array = [], node = undefined) {
    if (node === undefined) {
      node = this.root
    } else if (!node) {
      return array
    }
    array = this.postorder(array, node.left)
    array = this.postorder(array, node.right)
    array.push(node.value)
    return array;
  }

  breadthFirst(array = []) {
    let queue = [this.root]

    while (queue.length) {
      let node = queue.shift()
      array.push(node.value)
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
    return array;
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

// console.log(tree.preorder())
// console.log(tree.inorder())
// console.log(tree.postorder())
console.log(tree.breadthFirst())
