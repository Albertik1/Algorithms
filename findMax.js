function findMax(array, max = 0) {
  return array.length === 0
    ? max
    : findMax(array.slice(1), array[0] > max ? array[0] : max);
}
console.log(findMax([1, 5, 10, 25, 16, 1]));
