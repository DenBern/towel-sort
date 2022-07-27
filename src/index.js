
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix.length == 0) {
    return [];
  } else {
    return [matrix.flat()];
  }
};
