/*
1 - 1
2 - 2 ~ 7
3 - 8 ~ 19
4 - 20 ~ 37

6n만큼씩 증가
1 + 6
1 + 6 + 12
1 + 6 + 12 + 18

(6 * t * (t+1) / 2) + 1
*/


const n = parseInt(require("fs").readFileSync("/dev/stdin").toString().trim());

let room = 0;

while (n > (6 * room * (room + 1) / 2) + 1) {
    room += 1;
}

console.log(room + 1);
