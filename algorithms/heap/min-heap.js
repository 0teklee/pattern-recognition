// class MinHeap {
//   constructor() {
//     this.items = [];
//   }
//
//   size() {
//     return this.items.length;
//   }
//   swap(a, b) {
//     [this.items[a], this.items[b]] = [this.items[b], this.items[a]];
//   }
//   pop() {
//     // size 0 시 null 반환
//     if (this.size() <= 0) {
//       return null;
//     }
//
//     // min이었던 head의 값만 저장함
//     const min = this.items[0];
//     // 새로운 헤드로 꼬리에 있던 값을 넣음
//     this.items[0] = this.items[this.size() - 1];
//     // 그다음 0 인덱스 위에서부터 내려가면서 정렬함.
//     this.bubbleDown();
//
//     // 저장해둔 큐 헤드를 반환
//     return min;
//   }
//   bubbleDown() {
//     // 위에서부터 내려감
//     let index = 0;
//
//     // index * 2 + 1 현재 인덱스 * 2에 왜 + 1일까?
// 부모 노드에서 오른쪽 노드가 가장 큰 숫자를 더해짐 < 마지막 노드 인덱스랑 비교해서 더 작을 때까지
//     while (index * 2 + 1 < this.size() - 1) {
//       let leftIndex = index * 2 + 1;
//       let rightIndex = index * 2 + 2;
//       let smallerIndex =
//           right index가 left보다 항상 크니까 (+2), 마지막 인덱스보다 작아야함
//         rightIndex < this.size() - 1 &&
//         // 여기서 더 작은 쪽의 비교 대상 적용됨
//         // 양 옆 자식 중에 더 작은 쪽이랑 부모를 비교해야함.
//         // 언제나 같거나 작아도 되나?
//         this.items[rightIndex] <= this.items[leftIndex]
//           ? rightIndex
//           : leftIndex;
//       // 아래가 중단점
//       if (this.items[index] <= this.tems[smallerIndex]) {
//         break;
//       }
//
//       // 현재 인덱스의 값이 자식의 더 작은쪽보다 더 큰 경우
//       // 스왑 + 로컬 index를 자식으로 변경
//       this.swap(index, smallerIndex);
//       index = smallerIndex;
//     }
//   }
//   push(data) {
//     this.items.push(data);
//     // 배열(스택)에 데이터 넣고
//     this.bubbleUp();
//     // 바닥부터 정렬 시작
//   }
//   bubbleUp() {
//     let index = this.size() - 1;
//     // 로컬 인덱스. 작업의 시작점. 이게 바뀌어야 반복문이 멈춤
//     // 바닥부터 시작해서 index 0 이상일 때까지
//     while (index > 0) {
//       let parentIndex = Math.floor((index - 1) / 2);
//
//       // Min의 bubbleUp 조건 중단점.
//       // 부모 노드가 같거나 더 작을 때 멈춤
//       if (this.items[parentIndex] <= this.items[index]) {
//         break;
//       }
//       // 부모 노드가 더 큰 경우 바꿔야함, items의 인덱스, 부모 인덱스의 값을 바꿈
//       this.swap(index, parentIndex);
//       // 로컬 인덱스를 부모로 바꿈 (tail - 1 / 2)
//       index = parentIndex;
//     }
//   }
// }
