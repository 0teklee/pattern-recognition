class Stack {
  constructor() {
    this.items = [];
    this.size = 0;
  }
  push(item) {
    this.items.push(item);
    this.size++;
  }
  pop() {
    if (this.isEmpty()) {
      return null;
    }

    this.size--;
    return this.items.pop();
  }
  isEmpty() {
    return this.size === 0;
  }
}
