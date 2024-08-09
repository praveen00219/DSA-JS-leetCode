var inorderTraversal = function* (arr) {
  let flatArr = arr.flat(Infinity);
  flatArr.reverse();
  while (flatArr.length) {
    yield flatArr.pop();
  }
};
inorderTraversal([[[6]], [1, 3], []]);
output: [6, 1, 3];
