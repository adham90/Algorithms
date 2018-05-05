class HashTable {
  constructor() {
    this.data = []
  }
  hash(string, max = 255) {
      let hash = 0
      for (var i = 0; i < string.length; i++) {
        hash += string.charCodeAt(i)
      }
      return hash % max
  }
  add(key, value) {
    let index = this.hash(key)
    if (this.data[index] === undefined) {
      this.data[index] = [
        [key, value]
      ];
    } else {
      let inserted = false
      for (var i = 0; i < this.data[index].length; i++) {
        if (this.data[index][i][0] === key) {
          this.data[index][i][1] = value
          inserted = true
        }
        if (!inserted) {
          this.data[index].push([key, value]);
        }
      }
    }
  }

  lookup(key) {
    let index = this.hash(key)
    if (this.data[index] === undefined) {
      return undefined;
    } else {
      return this.data[index]
    }
  }
}

let ht = new HashTable;
ht.add("adham", "01011090087")
ht.add("ayman", "00010010001")
console.log(ht.lookup("adham"))
