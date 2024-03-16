/*
2 - 1
3 - 2 1/2
4 - 3 3/1
5 - 4 1/4 
6 - 5 5/1

left - 맨 끝은 1/n-1
right - 맨 끝은 n-1/1
*/

const x = parseInt(require("fs").readFileSync("/dev/stdin").toString().trim());

let count = 1;

while (x > count * (count + 1) / 2) {
    count += 1;
}

const startPoint = count % 2 === 0 ? "left" : "right";
let dif = x - (count * (count - 1) / 2);

let num, den;

if (count % 2 === 0) {
    num = dif;
    den = count + 1 - dif;
} else {
    num = count + 1 - dif;
    den = dif;
}

console.log(`${num}/${den}`);
