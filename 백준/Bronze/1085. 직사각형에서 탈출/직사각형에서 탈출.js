const [x, y, w, h] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const diff_arr = [];

diff_arr.push(x-0);
diff_arr.push(y-0);
diff_arr.push(w-x);
diff_arr.push(h-y);

console.log(diff_arr.reduce((a, b) => a < b ? a : b));