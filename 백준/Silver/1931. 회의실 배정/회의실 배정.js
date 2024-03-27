let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let n = parseInt(input.shift());

let meetings = input.map(el => el.split(" ").map(Number))
                    .sort((a, b) => {
                        if(a[1] === b[1]) {
                            return a[0] - b[0]; // 끝나는 시간이 같다면 시작 시간이 빠른 순으로 정렬
                        }
                        return a[1] - b[1]; // 끝나는 시간으로 오름차순 정렬
                    });

let count = 0;
let endTime = 0;

meetings.forEach(meeting => {
    if(meeting[0] >= endTime) { // 현재 회의의 시작 시간이 이전 회의의 끝나는 시간보다 크거나 같으면
        endTime = meeting[1]; // 회의를 선택하고 끝나는 시간을 업데이트
        count++;
    }
});

console.log(count); // 최대 사용할 수 있는 회의의 개수 출력