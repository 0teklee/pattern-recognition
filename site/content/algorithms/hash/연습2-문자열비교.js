/*
 * 문제: queryList가 strList에 있다면 true를 반환, 아니면 false를 담아 배열로 반환
 * arr은 최대 10^4 O(n)
 *
 * */

function solution(strList, queryList) {
  let result = [];
  let strObj = new Set();

  for (let i = 0; i < strList.length; i++) {
    strObj.add(strList[i]);
  }

  for (let i = 0; i < queryList.length; i++) {
    if (strObj.has(queryList[i])) {
      result.push(true);
    } else {
      result.push(false);
    }
  }
  return result;
}

let test1SL = ["apple", "banana", "cherry"];
let test1QL = ["banana", "kiwi", "melon", "apple"];
let test2SL = ["a", "b", "Q"];
let test2QL = ["c", "d", "e", "A", "a", "b", "Z", "Q"];

console.log("result", solution(test1SL, test1QL));
console.log("result", solution(test2SL, test2QL));
