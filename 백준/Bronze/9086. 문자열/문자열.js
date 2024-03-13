const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const t = parseInt(input[0]);

for (let i = 1; i <= t; i++) {
    const text_line = input[i].split("");
    const first = text_line[0];
    const end = text_line[text_line.length-1];
    console.log(`${first}${end}`);
}