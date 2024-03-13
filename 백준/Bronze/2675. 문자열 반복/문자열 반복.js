const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const t = parseInt(input[0]);

for (let i = 1; i <= t; i++) {
    const [r, s] = input[i].split(" ");
    const num_r = parseInt(r);
    const answer = s.split("").map((e) => e.repeat(r));
    console.log(answer.join(""));
}