const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const n = parseInt(input[0]);

let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;

for (let i = 1; i <= n; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    
    minX = Math.min(minX, a);
    maxX = Math.max(maxX, a);
    minY = Math.min(minY, b);
    maxY = Math.max(maxY, b);
}

const answer = n === 1 ? 0 : (maxX - minX) * (maxY - minY);

console.log(answer);