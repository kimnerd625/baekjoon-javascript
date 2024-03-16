const x = parseInt(require("fs").readFileSync("/dev/stdin").toString().trim());

let count = 1;

// x가 속하는 대각선 찾기
while (x > count * (count + 1) / 2) {
    count += 1;
}

// 대각선 내에서 x의 위치 찾기
let positionInDiagonal = x - (count * (count - 1) / 2);
let numerator, denominator;

if (count % 2 === 0) { // 짝수번째 대각선
    numerator = positionInDiagonal;
    denominator = count + 1 - positionInDiagonal;
} else { // 홀수번째 대각선
    numerator = count + 1 - positionInDiagonal;
    denominator = positionInDiagonal;
}

console.log(`${numerator}/${denominator}`);