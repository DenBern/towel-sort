
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix == undefined) {
    return [];
  } else if (matrix.length == 0) {
    return [];
  };
  



let x = [];


if (matrix.length > 0 && matrix.length === 1 ) {
  x.push(matrix[0]) + x.push(matrix[1].reverse());
} else  if (matrix.length === 2 ) {
x.push(matrix[0]) + x.push(matrix[1].reverse());
} else  if (matrix.length === 3 ) {
x.push(matrix[0]) + x.push(matrix[1].reverse()) + x.push(matrix[2]);
} else {
x.push(matrix[0]) + x.push(matrix[1].reverse()) + x.push(matrix[2]) + x.push(matrix[3].reverse());
 
}
return x.flat();



};


 


