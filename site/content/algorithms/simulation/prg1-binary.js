function remove(n) {
  let c = 0;
  let r = "";
  for (const dig of n) {
    if (dig == 0) {
      c++;
    } else {
      r += dig;
    }
  }
  return [r, c];
}

function toBinary(n) {
  let s = n;
  let a = [];
  let r = "";
  while (s > 0) {
    a.push(s % 2);
    s = Math.floor(s / 2);
  }
  while (a.length > 0) {
    r += a.pop();
  }
  return r;
}

function solution(s) {
  let count = 0;
  let removeCount = 0;

  while (s.length > 1) {
    let [removed, rc] = remove(s);
    let bin = toBinary(removed.length);
    console.log("inner while : ", bin, removed, rc);
    removeCount += rc;
    s = bin;
    count++;
  }

  return [count, removeCount];
}

console.log(`result : ${JSON.stringify(solution("110010101001"))}`);
