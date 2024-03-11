const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input = line.split(' ').map(el => parseInt(el));
}).on('close', function() {
    const A = parseInt(input[0]);
    const B = parseInt(input[1]);
    if (A - B !== 0) {
        const C = (A - B > 0) ? ">" : "<";
        console.log(C);
    } else {
        console.log("==");
    }
    process.exit();
})