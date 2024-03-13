const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 1; i <= parseInt(input[0]); i++) {
    const [a, b] = input[i].split(" ").map(Number);
    console.log(`Case #${i}: ${a} + ${b} = ${a+b}`);
}