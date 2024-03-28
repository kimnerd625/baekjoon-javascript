let [a, b] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
let flag = false;
let result = 1;

while (a <= b) {
    if (a === b) {
        flag = true;
        break;
    }
    if (b % 2 === 0) {
        b = parseInt(b / 2);
    } else if (b % 10 === 1) {
        b = parseInt(b / 10);
    } else{
        break;
    }
    result += 1;
}
if (flag) {
    console.log(result);
} else {
    console.log(-1);
}

