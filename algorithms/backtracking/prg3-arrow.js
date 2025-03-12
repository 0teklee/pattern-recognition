// 비교를 위해 알아야 하는 거
// 1. info의 총합
// 2. info에서 각 점수 10~0점 몇개 맞췄는지
// n발 이내에서 1을 넘을 수 있는지 알아야함
// backtrack을 통해 내가 얻을 수 있는 점수를 계산함
// 1초과 하기 위해 n을 어떻게 배분해야하는지 알아야함
// n발 이내에 1을 넘을 수 있나
// n발 이내에 1dml

// info에서 최고 점수 구하는 함수
function getTotal(info) {
  let result = 0;
  for (let i = 0; i <= info.length - 1; i++) {
    result += (10 - i) * info[i];
  }
  return result;
}

function backtrack(n, info, total) {
  let remain = n;
  let myTotal = 0;
  let result = [];
  // remain이 1일때까지 반복

  for (let i = 0; i < 10; i++) {
    let myShot = info[i] + 1;
    let myScore = 10 - i;
    // 언제 추가하지?
    // 적당히 배분되어야함.
    if (remain <= 0 || total < myTotal) {
      return result;
    }
    console.log(
      "inner for remain : ",
      remain,
      "\n",
      "myShot : ",
      myShot,
      "\n",
      "myScore : ",
      myScore,
      "\n",
      "myTotal : ",
      myTotal,
    );
    if (myTotal + myScore < total) {
      result.push(myShot);
      myTotal += myScore;
      remain = remain - myShot;
    }
  }

  return [-1];
}

function solution(n, info) {
  let infoTotal = getTotal(info);
  let result = backtrack(n, info, infoTotal);

  return result;
}

// 테스트 실행
console.log("result : ", solution(5, [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]));
