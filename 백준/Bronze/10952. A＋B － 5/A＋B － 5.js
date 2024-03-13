const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

while (input.length !== 1) {
    const line = input.shift();
    const [a, b] = line.split(" ").map(Number);
    console.log(a + b);
}