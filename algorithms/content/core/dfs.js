// 재귀 함수 사용하는 dfs
function recursiveDfs(start, graph, visited, answer) {
  // 재귀 호출 시 방문 여부 업데이트 위치 여기 맞나?
  visited[start] = true; // 1,2차원 배열에 따라 다름
  // 문제가 요구하는 반환값이 무엇인지에 따라 반환값, 함수 인자, 업데이트 조건 등이 달라진다.
  // answer이 숫자라면 특정 숫자 이하일 때 dfs 재귀 호출을 백트래킹할 수 있다.

  // 재귀 함수 스택에 들어가기 전에 조건문을 추가하여 return 할 수도 있다.
  // 이 때 중단되는 것은 더이상 아래 노드들이 조건에 부합하지 않는 경우 이다.
  while (!visited[start] && !!graph[start] && graph[start].length > 0) {
    // 이 조건에서 !graph[start]와 graph[start].length < 0 은 최하위 노드가 된다
    // 그래프가 start는 객체 키(부모 노드 이름)나 배열(부모 노드의 인덱스)가 될 수 있다.
    for (let neighbor of graph[start]) {
      dfs(neighbor, graph, visited, answer);
    }
  }
  // 반복문 외부에서 answer.push(neighbor)하여 노드를 저장할 수 있다.
  // 만약 배열을 반환한다면, stack에서 역순으로 쌓이기 때문에 .reverse()하여 반환해야
  // 루트 노드부터 차례대로 반환할 수 있다.
  return;
}

// 함수 내부에 stack을 만들어 사용하는 dfs
function stackDfs(start, graph, visited, answer) {
  let stack = [start];
  // 초기 시작점 start를 스택에 미리 추가하고, 방문 여부에 체크한다
  visited[start] = true; // 1,2차원 배열에 따라 다름
  //
  let result = [];
  while (stack.length > 0) {
    let current = stack.pop();

    for (let neighbor of graph[current]) {
      // 방문 여부 + graph[neighbor]가 문제 조건에 맞거나 틀릴 시 추가 조건
      if (
        !visited[neighbor]
        // && 문제에 맞는 조건 추가 가능 graph[neighbor] ===, >, < {X} 등.
      ) {
        //  answer++;
        visited[neighbor] = true; // 조건 추가 타이밍을 정리하고 싶다
        stack.push(neighbor);
      }
    }
    // result.push(current) -
    // 이 위치에서 push하면 최하위 노드부터 쌓임
    // = 역순으로 쌓이게 되서 마지막에 reverse()해주어야 한다.
    // 하지만 가장 깔끔한 방식일 수 있다.
    // for문 위에서 하면 자식노드보다 부모 노드의 정보가 먼저 쌓이는데,
    // 결과가 정확해지지 않더라. 왜인지는 잘 기억 안남.
  }
  return; // answer;
}

// offset 사용하는 dfs. 주로 2차원 배열 그리드 문제에서 사용

const offset = [
  [0, -1],
  [0, 1],
  [1, 0],
  [-1, 0],
];

function dfsOffset(visited, graph, [startR, startC], answer) {
  let stack = [[startR, startC]];
  visited[startR][startC] = true;
  let result = [];

  while (stack.length > 0) {
    let [curR, curC] = stack.pop();

    for (let [or, oc] of offset) {
      let [nr, nc] = [curR + or, curC + oc];
      if (
        nr >= 0 &&
        nc >= 0 &&
        nr < graph.length &&
        nc < graph[0].length &&
        !visited[nr][nc]
        //  &&   문제 조건에 맞는 조건 추가. graph[nr][nc] === 1, 기타 등등..
      ) {
        visited[nr][nc] = true;
        // answer에 값을 업데이트 해야한다면 answer++, ==, += 기타 등등 활용
        stack.push([nr, nc]);
      }
    }
    // curR, curC를 모아야 한다면, result에 push 해준다.
    result.push([curR, curC]);
    // 아 근데 순서가 이게 맞나? 어쨌든 제일 첫 startR,C가 result에 푸시되고
    // 그 다음 stack의 가장 위에 있는 최하위 노드가 실행되나?
  }

  return answer;
}
