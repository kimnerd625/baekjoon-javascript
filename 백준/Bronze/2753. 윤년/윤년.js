// 윤년은 연도가 4의 배수이면서, 100의 배수가 아닐 때 또는 400의 배수일 때이다.

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.on('line', function(line) {
    const input = parseInt(line);
    
    if (input % 4 === 0) {
        if (input % 100 !== 0) {
            console.log(1);
        } else if (input % 400 === 0) {
            console.log(1);
        } else {
            console.log(0);
        }
    } else {
        console.log(0);
    }
})