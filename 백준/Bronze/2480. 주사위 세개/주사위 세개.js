const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.on("line", (line) => {
    const input = line.split(" ").map(el => parseInt(el));
    
    const A = input[0];
    const B = input[1];
    const C = input[2];
    
    if (A == B && B == C) {
        console.log(10000 + A * 1000);
    } else if (A == B | A == C) {
        console.log(1000 + A * 100); 
    } else if (B == C) {
        console.log(1000 + B * 100);         
    } else {
        const maxVal = input.sort((a, b) => b - a)[0];
        console.log(maxVal * 100);
    }
})