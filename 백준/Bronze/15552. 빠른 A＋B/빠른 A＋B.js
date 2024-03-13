/*

기존 정석 readline 코드

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

let t = 0;
let count = 0;

readline.on("line", line => {
    if (t === 0 ) {
        t = parseInt(line);
    } else {
        const [a, b] = line.split(" ").map(el => parseInt(el));
        console.log(a + b);
        count += 1;
        
    }
    
    if (count === t) {
        readline.close();
    }
    
})
*/

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let output = '';
for (let i = 1; i <= parseInt(input[0]); i++) {
    const [a, b] = input[i].split(' ').map(Number);
    output += (a + b) + '\n';
}

console.log(output.trim());