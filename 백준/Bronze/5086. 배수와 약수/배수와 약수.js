const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

while (input.length !== 0) {
    const [a, b] = input.shift().split(" ").map(Number);
    
    if (a === 0 && b === 0) {
        break;
    }
    
    if ( a > b ) {
        if ( a % b === 0) {
            console.log("multiple");
        } else {
            console.log("neither");
        }
    } else {
        if ( b % a === 0) {
            console.log("factor");
        } else {
            console.log("neither");
        }
    }
}