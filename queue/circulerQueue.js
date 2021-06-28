class CircularQueue {
  constructor(size) {
    this.queue = [];
    this.read = 0;
    this.write = 0;
    this.max = size - 1;

    while (size > 0) {
      this.queue.push(null);
      size--;
    }
  }

  print() {
    return this.queue;
  }

  enqueue(item) {
    // Only change code below this line

    if (this.queue[this.write] === null) {
      this.queue[this.write++] = item;
      // console.log(this.write)
      // console.log(this.max)
      if (this.write > this.max) this.write = 0;
      console.log(this.write);
      return item;
    }
    return null;
  }
  // Only change code above this line

  dequeue() {
    // Only change code below this line
    if (this.queue[this.read] != null) {
      let item = this.queue[this.read];
      this.queue[this.read++] = null;
      if (this.read > this.max) this.read = 0;
      return item;
    }
    return null;

    // Only change code above this line
  }
}

let a = new CircularQueue(5);

a.enqueue(6);
a.enqueue(3);
a.enqueue(4);
a.enqueue(5);
a.enqueue(16);
a.dequeue(6);
a.dequeue(3);
a.dequeue(4);
a.enqueue(26);
a.enqueue(46);
console.log(a);
