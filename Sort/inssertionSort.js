function insertionSort(array) {
  // Only change code below this line
  var ele = array[0];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[i]) {
        var temp = array[j];
        array[j] = array[i];
        array[i] = temp;
      }
      console.log(array);
    }
  }
  console.log(array);
  return array;
  // Only change code above this line
}

insertionSort([
  1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
]);
