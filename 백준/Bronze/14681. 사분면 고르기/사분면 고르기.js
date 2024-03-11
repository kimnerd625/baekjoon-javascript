const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', (line) => {
    input.push(parseInt(line));
    
    if (input.length === 2) {
        const x = input[0];
        const y = input[1];
        
        if (x * y > 0 ) {
            if (x > 0) {
                console.log(1);
            } else {
                console.log(3);
            }
        } else {
            if (x > 0) {
                console.log(4);
            } else {
                console.log(2);
            }
        }
        
        readline.close();
    }
})