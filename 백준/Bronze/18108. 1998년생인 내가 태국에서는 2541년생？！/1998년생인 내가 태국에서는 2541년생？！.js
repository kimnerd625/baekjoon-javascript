const readline= require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input = line.split(' ').map(el => parseInt(el));
}).on('close', function() {
    const number = parseInt(input[0]);
    console.log(number - 543)
    process.exit();
})