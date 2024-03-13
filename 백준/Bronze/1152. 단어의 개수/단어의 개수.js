const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");

if (input == "") {
    console.log(0);
} else {
    console.log(input.length);
}


