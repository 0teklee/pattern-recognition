/*
 * 문제: arr의 두 수를 더하여 target을 만들 수 있다면 true를 반환, 아니면 false를 반환
 * arr은 최대 10^4 O(n)
 *
 * */

function solution(arr, target) {
  let k = new Set();
  for (let i = 0; i < arr.length; i++) {
    k.add(target - arr[i]);
  }

  for (let i = 0; i < arr.length; i++) {
    let comple = target - arr[i];
    if (k.has(arr[i]) && comple > 0 && comple !== arr[i]) {
      return true;
    }
  }
  return false;
}

console.log("result", solution([1, 2, 3, 4, 8], 6));
console.log("result", solution([2, 3, 5, 9], 10));
