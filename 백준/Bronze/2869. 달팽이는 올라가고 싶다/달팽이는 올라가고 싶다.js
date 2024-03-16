const [a, b, v] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

/*

시간 초과

let snail = 0;
let dayCount = 0;

while (snail < v) {
    if (snail >= v) {
        console.log(dayCount);
        break;
    }
    dayCount += 1;
    snail += a;
    if (snail >= v) {
        console.log(dayCount);
        break;
    }
    snail -= b;
}

*/

/*
let dayCount = Math.ceil((v - b) / (a - b));

console.log(dayCount);
*/

/*
마지막의 경우를 생각했을 때,
i) V에 도달을 A에 딱 맞게 했을 때, ii) 딱 맞게 하지 못했을 때,

i)의 경우, 
V - (A = 마지막 오르기)를 (A - B)로 나누면, 딱 나눠 떨어져야 함 (나머지 = 0)

ii)의 경우,
V - (A = 마지막 오르기)를 (A - B)로 나누면, 남는 게 있음 (찰나로 한 번에 못감.. 멍청한 달팽이)
고로 하루를 더 써야 함
*/

let dayCount;

if ((v - a) % (a - b) === 0 ) {
    console.log( (v - a) / (a - b) + 1);
} else {
    console.log( parseInt((v - a) / (a - b)) + 2);
}