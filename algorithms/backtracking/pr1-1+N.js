function backtrack(총합, 선택된수, 시작수, 전체수, 결과) {
  // 중단점: 총합이 10이면 결과에 추가
  if (총합 === 10) {
    결과.push(선택된수);
    return;
  }

  for (let i = 시작수; i <= 전체수; i++) {
    if (총합 + i <= 10) {
      // 총합이 10을 넘지 않는 경우에만 다음 단계로 이동
      backtrack(총합 + i, 선택된수.concat(i), i + 1, 전체수, 결과);
    }
  }
}

function solution(n) {
  let result = [];
  backtrack(0, [], 1, n, result);
  return result;
}

// 테스트 실행
console.log("result : ", solution(5));
