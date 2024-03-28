function solution(name) {
    let answer = 0; // 조이스틱 조작 횟수
    let move = name.length - 1; // 최소 좌우 이동: 일단 끝까지 가는 것으로 초기 설정

    for (let i = 0; i < name.length; i++) {
        // 상하 조작 계산
        let nextChar = name.charCodeAt(i) - 'A'.charCodeAt(0);
        answer += nextChar > 13 ? 26 - nextChar : nextChar;

        // 좌우 이동 최소화 계산
        let nextIndex = i + 1; // 다음 문자로 이동
        // 현재 문자 다음에 연속된 A 찾기
        while (nextIndex < name.length && name[nextIndex] === 'A') {
            nextIndex++;
        }
        
        move = Math.min(move, i * 2 + name.length - nextIndex, i + (name.length - nextIndex) * 2);
    }

    answer += move; // 최종 조작 횟수에 좌우 이동 횟수 추가
    return answer;
}