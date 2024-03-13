const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

while (input.length !== 0) {
    const text = input.shift();
    console.log(text);
}