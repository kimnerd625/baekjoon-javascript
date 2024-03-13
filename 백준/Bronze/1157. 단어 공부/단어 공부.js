const input = require("fs").readFileSync("/dev/stdin").toString().trim().toUpperCase().split("").map((e) => e.charCodeAt());

const arr = new Array(26).fill(0);

/*
기존 답안
while (input.length !== 0) {
    const alphabet = input.shift();
    arr[alphabet-65] += 1;
};
*/

input.forEach((e) => arr[e-65] += 1);

const max_val = Math.max(...arr);
const answer = [];

arr.forEach((e, index) => {if (e === max_val) {
    answer.push(String.fromCharCode(index + 65));
}})

if (answer.length !== 1) {
    console.log("?");
} else {
    console.log(answer[0]);
}

