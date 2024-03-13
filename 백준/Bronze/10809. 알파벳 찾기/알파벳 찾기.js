const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const alphabet_array = new Array(26).fill(-1);

const word = input.split("").map(e => e.charCodeAt(0) - 97); // baekjoon - 104...

let count = 0;

while (word.length !== 0) {
    const temp = word.shift();
    if (alphabet_array[temp] === -1) {
        alphabet_array[temp] = count;
    }
    count += 1;
}

console.log(alphabet_array.join(" "));