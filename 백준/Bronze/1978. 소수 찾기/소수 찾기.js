function isPrime(x) {
    if (x <= 1) {
        return false;
    }
    
    for (let i = 2; i <= Math.sqrt(x); i++) {
        if (x % i === 0) {
            return false;
        }
    }
    
    return true;
} 

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const n = parseInt(input[0]);

const arr = input[1].split(" ").map(Number);

let answer = 0;

arr.forEach((n) => { if (isPrime(n)) answer += 1; });

console.log(answer);