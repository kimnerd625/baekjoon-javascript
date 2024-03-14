const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("", function(input) {
    const croatianAlphabet = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

    let count = 0;
    let index = 0;

    while (index < input.length) {
        if (croatianAlphabet.includes(input.substring(index, index + 2))) {
            index += 2;
        } else if (croatianAlphabet.includes(input.substring(index, index + 3))) {
            index += 3;
        } else {
            index += 1;
        }
        count++;
    }

    console.log(count);
    rl.close();
});