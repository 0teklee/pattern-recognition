// 배열 arr이 주어질 시 시계방향으로 n번 회전하는 함수

function rotate(arr) {
  let result = Array.from({ length: arr.length }, () =>
    Array(arr.length).fill(0),
  );
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      result[j][result.length - 1 - i] = arr[i][j];
    }
  }
  return result;
}

function rotateClock(arr, n) {
  let result;
  for (let i = 0; i <= n; i++) {
    result = rotate(arr);
  }
  return result;
}

console.log(
  `result : ${rotateClock(
    [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ],
    1,
  )}`,
);
