function solution(code) {
    let mode = 0; // 시작할 때 mode는 0입니다.
    let ret = ""; // 최종적으로 반환할 문자열입니다.

    for (let idx = 0; idx < code.length; idx++) {
        const char = code[idx];
        if (char === "1") {
            mode = 1 - mode; // mode가 0이면 1로, 1이면 0으로 바꿉니다.
        } else {
            if (mode === 0 && idx % 2 === 0) {
                ret += char; // mode가 0이고 idx가 짝수일 때 char를 ret에 추가합니다.
            } else if (mode === 1 && idx % 2 === 1) {
                ret += char; // mode가 1이고 idx가 홀수일 때 char를 ret에 추가합니다.
            }
        }
    }

    return ret === "" ? "EMPTY" : ret; // ret가 빈 문자열이라면 "EMPTY"를, 아니면 ret를 반환합니다.
}