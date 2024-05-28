/*
n = 진법
t = 미리 구할 숫자의 갯수
m = 게임에 참가하는 인원
p = 튜브의 순서
*/

/*
2, 4, 2, 1일 때,
0 1 1 1 0
1 0 1 0
*/

function solution(n, t, m, p) {
    let i = 0;
    let turn = 1;
    let answer = [];
    while (answer.length !== t) {
        let convertedValue = i.toString(n).toUpperCase().split("");
        for (let e of convertedValue) {
            if (answer.length == t) {
                break;
            }
            if (turn === p) {
                answer.push(e);
            }
            turn += 1;
            if (turn > m) {
                turn = 1;
            }
        }
        i ++;
    }
    return answer.join("");
}