const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const t = parseInt(input[0]);

for (let i = 1; i <= t; i++) {
    const c = parseInt(input[i]);
    
    let q = parseInt(c / 25);
    let afterQ = c % 25;
    
    let d = parseInt(afterQ / 10);
    let afterD = afterQ % 10;
    
    let n = parseInt(afterD / 5);
    let p = afterD % 5;
    
    
    console.log(`${q} ${d} ${n} ${p}`);
}