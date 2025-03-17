/*
 *이진 트리를 표현한 배열 nodes를 인자로 받습니다. 예를 들어 nodes가 `[1,2,3,4,5,6,7]`이라면 다음과 같은 트리를 표현합니다.
 * 해당 이진트리에 대하여 전위 순회, 중위순회, 후위 순회 결과를 반환하는 solution()함수를 구현하세요.
 * 조건: 노드는 1 이상 1000개 이하. 노드는 정수값이며 중복되지 않는다.
 * */

function getPreOrder(nodes) {
  let result = [empty, ...nodes];
  for (let i = 1; i < nodes.length; i++) {
    if (i === 1) {
      result.push(i);
      continue;
    }
    // 현재 노드가 부모보다 작으면?
    if (nodes[i] < result[i / 2]) {
      let leftGap = Array(i * 2).fill();
      leftGap[i * 2] = nodes[i];
      result.push(...leftGap);
      continue;
    }
    if (nodes[i] > result[i / 2 + 1]) {
      let leftGap = Array(i * 2).fill();
      leftGap[i * 2] = nodes[i];
      result.push(...leftGap);
      continue;
    }
  }
  return result;
}

function solution(nodes) {
  let result = [];
  let preOrder = getPreOrder(nodes);

  return result;
}
