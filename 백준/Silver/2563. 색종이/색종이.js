/*
출력: 색종이 영역 넓이

2차원 배열에서 하나의 좌표 => 사실 넓이 1과 같음

*/

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let board = new Array(100).fill(null).map(() => new Array(100).fill(0));
let blackArea = 0;

let n = parseInt(input[0]);

for (let k = 1; k <= n; k++) {
    const [startX, startY] = input[k].split(" ").map(Number);
    
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j <10; j++) {
            if (board[startX+i][startY+j] === 0) {
                board[startX+i][startY+j] = 1;
                blackArea += 1;
            }
        }
    }
}

console.log(blackArea);