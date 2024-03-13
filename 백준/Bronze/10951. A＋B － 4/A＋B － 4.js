const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

while (input.length !== 0) {
    const t = input.shift();
    const [a, b] = t.split(" ").map(Number);
    console.log(a+b);
}