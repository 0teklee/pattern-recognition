const solution = (balls, orders) => {
  let head = 0;
  let tail = balls.length - 1;
  let result = [];
  let wait = new Set();
  const next = 1;
  const prev = -1;

  for (let i = 0; i < orders.length; i++) {
    if (orders[i] === balls[head]) {
      console.log(`head : ${balls[head]}`);
      result.push(orders[i]);
      head++;
      while (wait.has(orders[i] + next)) {
        result.push(orders[i] + next);
        wait.delete(orders[i] + next);
        head++;
      }
    } else if (orders[i] === balls[tail]) {
      result.push(orders[i]);
      if (wait.has(orders[i] + prev)) {
        while (wait.has(orders[i] + prev)) {
          result.push(orders[i] + prev);
          wait.delete(orders[i] + prev);
          tail--;
        }
      }
      tail--;
    } else {
      wait.add(orders[i]);
    }
  }
  return result;
};

console.log(
  "result : ",
  solution([1, 2, 3, 4, 5, 6, 7], [7, 5, 6, 4, 2, 1, 3]),
);
