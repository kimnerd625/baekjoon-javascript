const fs = require("fs");

const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
const targetCost = Number(input[0]);
const targetList = input.slice(2);

let totalCost = 0;

for (let i = 0; i < targetList.length; i++) {
    const [cost, count] = targetList[i].split(" ").map((x) => Number(x));
    totalCost += cost * count;
}

if (targetCost === totalCost) {
    console.log("Yes");
} else {
    console.log("No");
}
