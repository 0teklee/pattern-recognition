function multiplyMatrix(arr1, arr2) {
  const size = arr1.length;
  const result = Array.from({ length: size }, () => Array(size).fill(0));

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      for (let k = 0; k < size; k++) {
        result[i][j] += arr1[i][k] * arr2[k][j];
      }
    }
  }
  return result;
}

function transposeMatrix(arr) {
  const size = arr.length;
  const result = Array.from({ length: size }, () => Array(size).fill(0));

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      result[i][j] += arr[j][i];
    }
  }
  return result;
}

function solution(arr1, arr2) {
  const multiplied = multiplyMatrix(arr1, arr2);
  const result = transposeMatrix(multiplied);

  return result;
}

console.log(
  `result : ${JSON.stringify(
    solution(
      [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
      [
        [9, 8, 7],
        [6, 5, 4],
        [3, 2, 1],
      ],
    ),
  )}`,
);
