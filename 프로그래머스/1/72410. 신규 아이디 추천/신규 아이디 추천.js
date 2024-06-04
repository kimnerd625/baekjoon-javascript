function solution(new_id) {
    let filterList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "-", "_", "."];
    
    let answer = new_id;
    
    // 1단계: 소문자 치환
    answer = answer.toLowerCase();
    
    // 2단계: 기타 문자 제거
    answer = answer.split("").filter((e) => filterList.includes(e)).join("");
    
    // 3단계: 하나의 마침표로 치환
    let result = [];
    for (let i = 0; i < answer.length; i++) {
        if (!(answer[i] === "." && result[result.length - 1] === ".")) {
            result.push(answer[i]);
        }
    }
    answer = result.join("");
    
    // 4단계: 처음, 끝의 마침표 제거
    if (answer.startsWith(".")) {
        answer = answer.slice(1);
    }
    if (answer.endsWith(".")) {
        answer = answer.slice(0, -1);
    }
    
    // 5단계: 빈 문자열일 경우, "a" 추가
    if (answer.length === 0) {
        answer = "a";
    }
    
    // 6단계: 문자 길이 제한 및 마지막 마침표 제거
    if (answer.length >= 16) {
        answer = answer.slice(0, 15);
        if (answer.endsWith(".")) {
            answer = answer.slice(0, -1);
        }
    }
    
    // 7단계. 문자 길이 3으로 제한
    while (answer.length < 3) {
        answer += answer[answer.length - 1];
    }
    
    return answer;
}