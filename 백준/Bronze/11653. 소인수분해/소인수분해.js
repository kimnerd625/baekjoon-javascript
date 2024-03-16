let n = parseInt(require("fs").readFileSync("/dev/stdin").toString().trim());

function divide(n, factorArr) {
    for (let i = 2; i <= n; i++) {
        while (n % i === 0) {
            n /= i;
            factorArr.push(i);
        }
    }
}

if (n !== 1) {
    const factorArr = [];
    
    divide (n, factorArr);
    
    console.log(factorArr.join("\n"));
}
