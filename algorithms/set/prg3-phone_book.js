function solution(nums) {
  let poke = new Set(nums);
  return poke.size > nums.length / 2 ? nums.length / 2 : poke.size;
}

let test1 = [3, 1, 2, 3];
let test2 = [3, 3, 3, 2, 2, 4];
let test3 = [3, 3, 3, 2, 2, 2];

console.log("result : ", solution(test1));
console.log("result : ", solution(test2));
console.log("result : ", solution(test3));
