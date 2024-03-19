const n = parseInt(require("fs").readFileSync("/dev/stdin").toString().trim());

let answer = 0;

for (let i = 1; i <= n; i++) {
    if (i + i.toString().split("").map(Number).reduce((acc, el) => acc + el) === n) {
        answer = i;
        console.log(i);
        break;
    }
}

if (answer === 0) {
    console.log(0);  
}

