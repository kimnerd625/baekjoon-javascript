const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.on("line", line => {
    const a = parseInt(line);
    let answer = 0;
    for (let i = 1; i <= a; i++) {
        answer += i;
    }
    console.log(answer);
    readline.close();
})