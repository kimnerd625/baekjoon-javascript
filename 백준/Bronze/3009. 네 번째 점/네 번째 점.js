const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let arr_x = [];
let arr_y = [];

for (let i = 0; i < 3; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    
    if (arr_x.includes(a)) {
        arr_x = arr_x.filter(n => n !== a);
    } else {
        arr_x.push(a);
    }
    
    
    if (arr_y.includes(b)) {
        arr_y = arr_y.filter(n => n !== b);
    } else {
        arr_y.push(b);
    }
}

console.log(`${arr_x[0]} ${arr_y[0]}`);