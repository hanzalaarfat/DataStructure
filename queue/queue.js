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
