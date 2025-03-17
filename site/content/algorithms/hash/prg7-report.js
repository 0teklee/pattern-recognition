function solution(id_list, report, k) {
  let reported = {};
  let reporter = {};
  let count = {};

  for (let id of id_list) {
    reported[id] = 0;
    reporter[id] = [];
    count[id] = 0;
  }

  const reportArr = [...new Set(report)].map((item) => item.split(" "));
  for (const [rp, user] of reportArr) {
    reported[user] += 1;
    reporter[rp] = [...reporter[rp], user];
    console.log(`
    신고자 : ${rp} 
    위반자 : ${user} 
    신고당한 횟수 : ${reported[user]}`);
  }

  const bannedArr = Object.entries(reported).filter(([, count]) => count >= k);

  for (const [bannedUser] of bannedArr) {
    for (const rUser in reporter) {
      console.log("bannedUser in 2 for", bannedUser);
      console.log("reporter in 2 for", rUser);

      if (reporter[rUser].includes(bannedUser)) {
        count[rUser] += 1;
      }
    }
  }
  console.log("reported", reported);
  console.log("reporter", reporter);
  console.log("bannedArr", bannedArr);
  console.log("count", count);

  let result = Object.values(count);
  return result;
}

let id_list1 = ["muzi", "frodo", "apeach", "neo"];
let report1 = [
  "muzi frodo",
  "apeach frodo",
  "frodo neo",
  "muzi neo",
  "apeach muzi",
];
let k1 = 2;

console.log("result : ", solution(id_list1, report1, k1));
