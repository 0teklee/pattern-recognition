function solution(enroll, referral, seller, amount) {
  const sellerMap = new Map();
  const price = 100;
  let result = [];
  for (let member of enroll) {
    sellerMap.set(`${member}`, { income: 0, shared: "" });
  }

  for (let i = 0; i < referral.length; i++) {
    // 자신을 등록한 사람만 기억하면 됨
    if (referral[i] !== "-") {
      const enrolledBy = sellerMap.get(`${enroll[i]}`);

      sellerMap.set(enroll[i], { ...enrolledBy, shared: referral[i] });
      // 자신을 등록한 사람에게 이익금 계산에서 자신의 이익금을 빼서 더해줌.
      console.log(
        `${enroll[i]} \n enrolledBy : ${referral[i]} / ${enroll[i]} data: ${JSON.stringify(sellerMap.get(`${enroll[i]}`))}`,
      );
    }
    // 추가로 추천을 받은 사람 enroll[i]는
  }

  // 여기서 이익 계산함
  for (let i = 0; i < seller.length; i++) {
    const salesman = sellerMap.get(seller[i]);
    if (!salesman) {
      continue;
    }
    console.log(`${i} - salesman : ${seller[i]}`, salesman);
    const refer = salesman.shared;
    const salesCount = amount[i];
    console.log(`${i} - salesCount`, salesCount);
    let fee = 0;

    const income = salesCount * price;
    if (refer) {
      fee = income / 10;
    }
    const netIncome = income - fee;
    console.log(
      `${i} income: ${income}\n fee: ${fee} \nnetIncome >> \n`,
      netIncome,
    );
    sellerMap.set(seller[i], {
      ...salesman,
      income: salesman.income + netIncome,
    });

    if (refer) {
      const referrer = sellerMap.get(refer);
      // fee 더함
      sellerMap.set(refer, { ...referrer, income: referrer.income + fee });
      console.log(`${i} refer ${refer} >> \n`, sellerMap.get(refer));
    }
  }

  // 추가로 첫번째, 두번째 사람들 수수료 뺴줘야됨
  // 자기 이익 전체에서 -10% 해줘야됨
  // 그냥 obj가 쉬울지도.

  // 수수료 빼고, fee 계속 더해서 income 남게 됨.
  console.log("before entries :", sellerMap);
  let sellerArr = [...sellerMap].map(([, obj]) => obj.income);

  return sellerArr;
}

let test1A = [
  "john",
  "mary",
  "edward",
  "sam",
  "emily",
  "jaimie",
  "tod",
  "young",
];
let test1B = ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"];
let test1C = ["young", "john", "tod", "emily", "mary"];
let test1D = [12, 4, 2, 5, 10];

console.log(`result : /n`, solution(test1A, test1B, test1C, test1D));
