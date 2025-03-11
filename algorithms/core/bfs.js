class Queue {
  constructor() {
    this.items = [];
    this.front = 0;
    this.rear = 0;
  }
  enqueue(data) {
    this.items.push(data);
    this.rear++;
  }
  dequeue() {
    return this.items[this.front++];
  }
  isEmpty() {
    return this.front === this.rear;
  }
}

function bfs(start, graph, visited, answer) {
  let Q = new Queue();
  visited[start] = true; // 1,2차원 배열에 따라 다름
  /* 최소, 최단 거리 등을 계산해야한다면 param으로 받고,
   반복문 안에서 조건에 맞을 시 업데이트 한 뒤 return한다.
   혹은 해당하는 좌표의 묶음 등을 필요로 할 시
    let result = [start];를 반복문 외부에 만들고,
    result.push(newNode)를 하면 방문하는 순서대로 쌓이게 된다.
    */

  // 큐 시작점 추가
  Q.push(start); // 1,2차원 배열에 따라 start 형태 다름
  while (!Q.isEmpty()) {
    let start = Q.dequeue();
    // 조건문 추가

    for (let neighbor of graph[start]) {
      // 방문 여부 + graph[neighbor]가 문제 조건에 맞거나 틀릴 시 추가 조건
      if (!visited[neighbor]) {
        //  answer++;, 혹은 문제 조건에 따라 bfs 내부에서 result를 모아 push할 수 도 있음.
        visited[neighbor] = true; // 이 조건 언제 추가해야하지?
        Q.enqueue(neighbor);
      }
    }
  }
  return answer;
}

// offset 사용하는 bfs. 주로 2차원 배열 그리드 문제에서 사용

const offset = [
  [0, -1],
  [0, 1],
  [1, 0],
  [-1, 0],
];

function bfsOffset(visited, graph, [startR, startC], answer) {
  let Q = new Queue();
  visited[startR][startC] = true;
  Q.enqueue([startR, startC]);
  while (!Q.isEmpty()) {
    let [curR, curC] = Q.dequeue();

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
        Q.enqueue([nr, nc]);
      }
    }
  }
  return answer;
}
