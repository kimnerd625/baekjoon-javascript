const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

while (input.length !== 1) {
    const line = input.shift();
    const [a, b] = line.split(" ").map(Number);
    console.log(a + b);
}

/*
모범 답안

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

while (input.length > 0) {
    const line = input.shift(); // 첫 번째 요소를 빼내어 line에 저장
    if (line === "0 0") break; // "0 0"을 만나면 반복 종료
    const [num1, num2] = line.split(" ").map(Number);
    console.log(num1 + num2);
}
*/