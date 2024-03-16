const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

input.pop(); // 마지막 -1을 제거합니다.

input.forEach(t => {
    let factorArr = [];
    let sum = 0;
    
    for (let i = 1; i < t; i++) { // t를 제외한 모든 약수 찾기
        if (t % i === 0) {
            factorArr.push(i);
            sum += i; // 약수의 합 계산
        }
    }
    
    if (t === sum) { // 완전수 판별
        console.log(`${t} = ${factorArr.join(" + ")}`);
    } else {
        console.log(`${t} is NOT perfect.`);
    }
});