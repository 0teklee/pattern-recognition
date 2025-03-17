function solution(n, lost, reserve) {
  let students = {};
  for (let i = 1; i <= n; i++) {
    students[i] = 1;
  }

  for (let r = 0; r < reserve.length; r++) {
    let num = reserve[r];
    students[num] += 1;
  }

  for (let l = 0; l < lost.length; l++) {
    let num = lost[l];
    students[num] -= 1;
  }

  // 여벌 나눔 계산
  // lost 빼고 나서 나머지 학생들 중 0인 학생만 찾아서
  // 앞 뒤로 1 이상일 시 공유함
  for (let sKey in students) {
    if (students[sKey] === 0) {
      let next = Number(sKey) + 1;
      let prev = Number(sKey) - 1;

      if (prev > 0 && students[prev] > 1) {
        students[prev] = students[prev] - 1;
        students[sKey] = 1;
        continue;
      }

      if (next <= n && students[next] > 1) {
        students[next] = students[next] - 1;
        students[sKey] = 1;
        continue;
      }
    }
  }

  const result = Object.values(students).filter((item) => item > 0);
  return result.length;
}

console.log("result : ", solution(5, [2, 4], [1, 3, 5]));
console.log("result : ", solution(5, [2, 4], [3]));
console.log("result : ", solution(3, [3], [1]));
