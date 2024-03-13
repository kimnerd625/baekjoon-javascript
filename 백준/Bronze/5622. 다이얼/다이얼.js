/*
아스키 코드 - 65 기준

0, 1, 2: 3
3, 4, 5: 4
6, 7, 8: 5
9, 10, 11: 6
12, 13, 14: 7
15, 16, 17, 18: 8
19, 20, 21: 9
22, 23, 24, 25: 10
*/

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("");

let answer = 0;

while (input.length !== 0) {
    const alphabet = input.shift().charCodeAt(0) - 65;
    let add_val = 0;
    if (alphabet == 18) {
        add_val = 8;
    } else if (alphabet == 21) {
        add_val = 9;
    } else if (alphabet >= 24) {
        add_val = 10;
    }else {
        add_val = parseInt(alphabet / 3) + 3;
    }
    answer += add_val;
}

console.log(answer);