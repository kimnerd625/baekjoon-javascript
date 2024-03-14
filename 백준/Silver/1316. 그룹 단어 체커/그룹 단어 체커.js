const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const n = parseInt(input[0]);

let count = 0; // count 변수 선언 및 초기화

let visited = new Array(26).fill(0);

for (let i = 1; i <= n; i++) {
    const word = input[i].trim();
    let isGroupWord = true;
    
    for (let j = 0; j < word.length; j++) {
        const index = word.charCodeAt(j) - 97;
        
        if (visited[index]) {
            if (word[j] !== word[j - 1]) {
                isGroupWord = false;
                break;
            }
        } else {
            visited[index] = 1;
        }
    }
    
    if (isGroupWord) {
        count++;
    }
    
    visited.fill(0);
}

console.log(count);