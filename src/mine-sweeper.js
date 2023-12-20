const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The resultult should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = [];

  for (let i = 0; i < matrix.length; i += 1) {
    result.push([]);
    for (let j = 0; j < matrix[i].length; j += 1) {
      let count = 0;
      if (i > 0) {
        if (matrix[i - 1][j]) {
          count += 1;
        }
        if (matrix[i - 1][j + 1]) {
          count += 1;
        }
        if (matrix[i - 1][j - 1]) {
          count += 1;
        }
      }
      if (i < matrix.length - 1) {
        if (matrix[i + 1][j]) {
          count += 1;
        }
        if (matrix[i + 1][j + 1]) {
          count += 1;
        }
        if (matrix[i + 1][j - 1]) {
          count += 1;
        }
      }

      if (matrix[i][j + 1]) {
        count += 1;
      }
      if (matrix[i][j - 1]) {
        count += 1;
      }
      result[i].push(count);
    }
  }
  return result;
}

module.exports = {
  minesweeper,
};
