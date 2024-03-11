const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

let t = 0;
let count = 0;

readline.on("line", (line) => {
    if (t === 0) {
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
