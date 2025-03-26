class Queue {
  constructor() {
    this.items = [];
    this.front = 0;
    this.rear = 0;
  }

  push(data) {
    this.items.push(data);
    this.rear++;
  }
  pop() {
    if (this.isEmpty()) {
      return null;
    }
    const head = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return head;
  }
  isEmpty() {
    return this.front === this.rear;
  }
}
