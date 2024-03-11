const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.on("line", (line) => {
    const n = parseInt(line);
    const a = parseInt(n / 4);
    const answer = "long ".repeat(a) + "int";
    console.log(answer);
    
    readline.close();
})