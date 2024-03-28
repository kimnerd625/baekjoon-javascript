let a = require("fs").readFileSync("/dev/stdin").toString().trim().split("");

let number = [];
let prevOperator = "+";
let answer = 0;

while (a.length !== 0) {
    let temp = a.shift();
    if (temp === "+") {
        if (prevOperator === "+") {
            answer += parseInt(number.join(""));
            number = [];
            prevOperator = "+";
        } else {
            answer -= parseInt(number.join(""));
            number = [];
        }
    } else if (temp === "-") {
        if (prevOperator === "+") {
            answer += parseInt(number.join(""));
            number = [];
        } else {
            answer -= parseInt(number.join(""));
            number = [];
        }
        prevOperator = "-";
    } else {
        number.push(temp);
    }
}

if (prevOperator === "+" || prevOperator === "") {
    answer += parseInt(number.join(""));
} else {
    answer -= parseInt(number.join(""));
}

console.log(answer);