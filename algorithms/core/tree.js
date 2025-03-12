// 이진 트리 기본 구현체

// 모든 노드에서 가장 오른쪽인 노드만 선택하는 함수
const rightSideView = (tree) => {
  if (tree.length <= 1) return []; // 빈 트리거나 루트 노드만 없는 경우

  const result = [];
  const queue = [1]; // 루트 노드의 인덱스 (1부터 시작)

  while (queue.length > 0) {
    const levelSize = queue.length; // 현재 레벨의 노드 수
    let lastNodeValue = null;

    for (let i = 0; i < levelSize; i++) {
      const currentIndex = queue.shift();
      if (tree[currentIndex] === null || tree[currentIndex] === undefined)
        continue;

      lastNodeValue = tree[currentIndex]; // 현재 레벨의 마지막 값을 저장

      // 왼쪽 자식 추가
      const leftChildIndex = 2 * currentIndex;
      if (leftChildIndex < tree.length) queue.push(leftChildIndex);

      // 오른쪽 자식 추가
      const rightChildIndex = 2 * currentIndex + 1;
      if (rightChildIndex < tree.length) queue.push(rightChildIndex);
    }

    if (lastNodeValue !== null) result.push(lastNodeValue);
  }

  return result;
};

// 예제 실행
console.log(rightSideView([null, 1, 2, 3, null, 5, null, 4])); // 출력: [1, 3, 4]
console.log(rightSideView([null, 1, 2, 3, 4, null, null, null, 5])); // 출력: [1, 3, 4, 5]
console.log(rightSideView([null, 1, null, 3])); // 출력: [1, 3]
console.log(rightSideView([null])); // 출력: []

/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
