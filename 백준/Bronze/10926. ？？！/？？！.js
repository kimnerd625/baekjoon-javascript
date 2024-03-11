const readline= require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input = line.split(' ').map(el => (el).toString());
}).on('close', function() {
    console.log(input[0] + "??!");
    process.exit();
})