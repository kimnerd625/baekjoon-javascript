const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.on("line", (line) => {
    const input = line.split(" ").map(el => parseInt(el));
    const H = input[0];
    const M = input[1];
    
    let a = H;
    let b = 0;
    
    if (M - 45 >= 0) {
        b = M - 45;
        a = H;
    } else {
        b = 60 + (M - 45);
        if ( a == 0 ) {
            a = 23;
        } else { 
            a = H - 1;
        }
    }
    
    console.log(a, b);
    readline.close();
})
