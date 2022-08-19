"use strict";
function findSmallestIndex(array) {
  var smallestElement = array[0];
  var smallestIndex = 0;
  let arrLen = array.length;

  for (var i = 0; i < arrLen; i++) {
    if (array[i] < smallestElement) {
      smallestElement = array[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
}

//console.log(findSmallestIndex([5, 3, 6, 2, 10]));
function selectionSort(array) {
  var sortedArray = [];
  var length = array.length;

  for (var i = 0; i < length; i++) {
    var smallestInd = findSmallestIndex(array);
    sortedArray.push(array.splice(smallestInd, 1)[0]);
  }

  return sortedArray;
}

console.log(selectionSort([5, 3, 6, 2, 10]));
