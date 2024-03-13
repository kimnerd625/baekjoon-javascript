const input = require("fs").readFileSync("/dev/stdin").toString().trim();

for (let i = 1; i <= parseInt(input); i++) {
    console.log(" ".repeat(parseInt(input)-i) + "*".repeat(i));
}