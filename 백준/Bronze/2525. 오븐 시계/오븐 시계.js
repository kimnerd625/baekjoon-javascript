const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
let answer = 0;

readline.on("line", (lines) => {
    input.push(lines);
    if (input.length === 2) {
        const [H, M] = input[0].split(" ").map(el => parseInt(el));
        const A = parseInt(input[1], 10);
        
        const newM = (M + A) % 60;
        const additionalH = parseInt(((M + A) / 60), 10); 
        
        if ( H + additionalH >= 24) {
            console.log(H + additionalH - 24, newM);
        } else {
            console.log(H + additionalH, newM);
        }
    }
    
    readline.close();
})