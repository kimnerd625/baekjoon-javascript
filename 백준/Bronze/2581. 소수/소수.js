const [a, b] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

let primeArr = [];

for (let i = a; i <= b; i++) {
  
    let isPrime = true;
    
    if (i <= 1) {
        isPrime = false;
    }
    
    for (let j = 2; j * j <= i + 1; j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    
    if (isPrime) {
        primeArr.push(i);
    }
}

if (primeArr[0]) {
    console.log(primeArr.reduce((a, b) => a + b, 0));
    console.log(primeArr[0]);
} else {
    console.log(-1);
}
