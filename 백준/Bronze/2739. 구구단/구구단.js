const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.on("line", (line) => {
    const input = parseInt(line, 10);
    
    for (let i = 1; i < 10; i++) {
        console.log(`${input} * ${i} = ${input * i}`);
    }
    
    readline.close();
});