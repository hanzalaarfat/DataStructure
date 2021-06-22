// QUEUE functions

function Queue() {
  var collection = [];
  this.print = function () {
    console.log(collection);
  };
  // Only change code below this line
  this.enqueue = function (ele) {
    // console.log(collection)
    collection.push(ele);
    return collection;
  };
  this.dequeue = function () {
    const e1 = collection.splice(0, 1);
    return e1[0];
  };
  this.size = function () {
    return collection.length;
  };
  this.isEmpty = function () {
    return collection.length === 0;
  };
  this.front = function () {
    return collection[0];
  };
  // Only change code above this line
}

// ################ PriorityQueue Functions #################################

function PriorityQueue() {
  this.collection = [];
  // this.collection = arguments[0]
  this.printCollection = function () {
    console.log(this.collection);
  };
  // Only change code below this line
  this.enqueue = function (ele) {
    this.collection.push(ele);
    var temp;
    for (let i = 0; i < this.collection.length; i++) {
      for (let j = 0; j < this.collection.length - 1; j++) {
        if (this.collection[j][1] > this.collection[j + 1][1]) {
          temp = this.collection[j];
          this.collection[j] = this.collection[j + 1];
          this.collection[j + 1] = temp;
        }
      }
    }
    return this.collection;
  };
  this.dequeue = function () {
    const e1 = this.collection.splice(0, 1);
    return e1[0][0];
  };
  this.size = function () {
    return this.collection.length;
  };
  this.front = function () {
    return this.collection[0][0];
  };
  this.isEmpty = function () {
    return this.collection.length === 0;
  };
  // Only change code above this line
}

// let pq1 = new PriorityQueue([['kitten', 2], ['dog', 2], ['rabbit', 2]])
// pq1.printCollection()
// pq1.enqueue(['human', 1])
pq1.printCollection();
