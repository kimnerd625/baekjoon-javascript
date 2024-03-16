const [n, k] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

let arr = [];

for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
        arr.push(i);
        if (i !== n / i) {
            arr.push(n / i);
        }
    }
}

arr.sort((a, b) => a - b);

let answer = arr[k-1] ? arr[k-1] : 0;
console.log(answer);