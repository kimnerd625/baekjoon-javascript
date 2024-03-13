const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("");


const front = input.slice(0, parseInt(input.length / 2));
const back = input.slice(parseInt(input.length / 2), input.length);

if (front.length !== back.length) {
    back.shift();
}

if (front.join("") === back.reverse().join("")) {
    console.log(1);
} else {
    console.log(0);
}