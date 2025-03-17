// parent 배열에서 루트 노드를 찾는 함수
// 루트 노드란 집합의 대표자 (즉, 최상위 부모 노드)
// 경로 압축을 통해 탐색 경로를 최적화
function find(parents, x) {
  // x가 자신의 부모 노드라면 (즉, 루트 노드라면)
  if (parents[x] == x) {
    return x; // 루트 노드 반환
  }
  // x가 루트가 아니면, 재귀 호출을 통해 루트를 찾음
  // 찾으면서 부모를 루트로 갱신 (경로 압축)
  parents[x] = find(parents, parents[x]);
  return parents[x]; // 최종 루트 반환
}

// 두 노드의 집합을 합치는 함수 (Union by Rank)
// Rank는 트리의 깊이를 의미하며, 더 낮은 트리를 높은 트리에 붙임
function union(parent, rank, x, y) {
  const xroot = find(parent, x); // x의 루트 노드 찾기
  const yroot = find(parent, y); // y의 루트 노드 찾기

  // Rank를 비교하여 트리의 균형 유지
  if (rank[xroot] < rank[yroot]) {
    parent[xroot] = yroot; // xroot 트리를 yroot에 연결
  } else if (rank[xroot] > rank[yroot]) {
    parent[yroot] = xroot; // yroot 트리를 xroot에 연결
  } else {
    // 랭크가 같다면 xroot를 부모로 설정하고, 랭크를 1 증가
    parent[yroot] = xroot;
    rank[xroot] += 1;
  }
}

// 최소 신장 트리 (MST) 비용 계산 함수
function solution(n, costs) {
  // 1. 간선 리스트를 비용 기준으로 오름차순 정렬
  costs.sort((a, b) => a[2] - b[2]); // MST를 위해 가장 낮은 비용의 간선을 먼저 처리

  // 2. parent 배열과 rank 배열 초기화
  // 각 노드는 처음엔 자기 자신이 루트인 독립 집합
  const parent = Array.from({ length: n }, (_, i) => i);
  const rank = Array(n).fill(0); // 모든 노드의 초기 Rank는 0

  let minCost = 0; // MST의 총 비용
  let edges = 0; // 현재까지 MST에 포함된 간선의 수

  // 3. 간선 리스트를 하나씩 확인하며 MST를 구성
  for (const edge of costs) {
    if (edges == n - 1) {
      // MST의 간선 수가 n-1이면 중단
      break;
    }
    // edge = [노드1, 노드2, 비용]
    const x = find(parent, edge[0]); // 노드1의 루트 노드 찾기
    const y = find(parent, edge[1]); // 노드2의 루트 노드 찾기

    if (x !== y) {
      // 두 노드가 같은 집합에 속하지 않으면 연결
      union(parent, rank, x, y); // 두 노드를 같은 집합으로 묶음
      minCost += edge[2]; // 간선의 비용을 총 비용에 추가
      edges += 1; // 간선 수 증가
    }
    // 두 노드가 이미 같은 집합이면 연결하지 않음 (사이클 방지)
  }

  return minCost; // MST의 최소 비용 반환
}

// 예제 테스트 케이스
console.log(
  "result : ",
  solution(4, [
    [0, 1, 1],
    [0, 2, 2],
    [1, 2, 5],
    [1, 3, 1],
    [2, 3, 8],
  ]),
);
// 결과: 4 (MST의 최소 비용)
