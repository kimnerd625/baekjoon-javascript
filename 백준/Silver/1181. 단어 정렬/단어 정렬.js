const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
input.shift(); // 첫 번째 줄(단어의 개수) 제거

let words = Array.from(new Set(input)); // 중복 제거

let answer = words.sort((a, b) => {
    if (a.length === b.length) {
        return a.localeCompare(b); // 길이가 같으면 사전 순으로 정렬
    }
    return a.length - b.length; // 길이에 따라 정렬
}).join("\n");

console.log(answer);