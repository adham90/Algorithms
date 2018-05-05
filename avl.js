class Tree {
  constructor() {
    this.root = null
  }

  add(value) {
    if (!this.root) {
      this.root = new Node(value);
      return;
    } else {
      this.root.add(value)
    }
  }
}

class Node {
  constructor(value, left = null, right = null) {
    this.value = value
    this.left  = left
    this.right = right
    this.height = 1
  }

  add(value) {
    if (this.value > value) {
      this._addLeft(value)
    } else {
      this._addRight(value)
    }
  }

  _addRight(value) {
    if (this.right) {
      this.right.add(value)
    } else {
      this.right = new Node(value)
    }

    if (!this.left || this.right.height > this.left.height) {
      this.height = this.right.height + 1;
    }
  }
  _addLeft(value) {
    if (this.left) {
      this.left.add(value)
    } else {
      this.left = new Node(value)
    }

    if (!this.right || this.left.height > this.right.height) {
      this.height = this.left.height + 1;
    }
  }
}

let tree = new Tree()
tree.add(10)
tree.add(5)
tree.add(4)
tree.add(11)
tree.add(11)
tree.add(12)
