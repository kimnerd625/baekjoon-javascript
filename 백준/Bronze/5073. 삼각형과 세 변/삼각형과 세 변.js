const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

input.pop();

while (input.length !== 0) {
    const [a, b, c] = input.shift().split(" ").map(Number);
    
    const sortedArray = [a, b, c].sort((a, b) => b - a);
    
    if (sortedArray[0] >= sortedArray[1] + sortedArray[2]) {
        console.log("Invalid");
        continue;
    }
    
    if (a === b && b === c) {
        console.log("Equilateral");
    } else if (a === b || b === c || c === a) {
        console.log("Isosceles");
    } else {
        console.log("Scalene");
    }
}