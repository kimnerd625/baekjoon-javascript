const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

while (input.length !==0) {
    const t = input.shift();
    
    if (t === -1) {
        break;
    }
        
    let factorArr = [];
    
    for (let i = 1; i < t; i++) {
        if ( t % i === 0) {
            factorArr.push(i);
        }
    }
    
    const sum = factorArr.reduce((a, b) => a + b, 0);
    
    if (t === sum) {
        console.log(`${t} = ${factorArr.join(" + ")}`);
    } else {
        console.log(`${t} is NOT perfect.`);
    }
    
}