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

let dayCount = Math.ceil((v - b) / (a - b));

console.log(dayCount);