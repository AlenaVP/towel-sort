
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return matrix.map(l => matrix.indexOf(l) % 2 === 0 ? l : l.reverse()).join(',').split(',');
}
