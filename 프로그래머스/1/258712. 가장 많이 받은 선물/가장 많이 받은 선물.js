function solution(friends, gifts) {
    // 이름 관련 인덱스
    let FI = {};
    // 선물 지수
    let GI = new Array(friends.length).fill(0);
    // 선물 교환 2차원 배열
    let PT = new Array(friends.length).fill().map(() => new Array(friends.length).fill(0));
    // 다음 달 선물 받는 사람
    let answer = new Array(friends.length).fill(0);
    
    // 친구들 인덱스 할당
    friends.forEach((el, i) => FI[el] = i);
    console.log(FI);

    for (let e of gifts) {
        let temp = e.split(" ");
        // 선물 지수 측정
        GI[FI[temp[0]]] += 1;
        GI[FI[temp[1]]] -= 1;
        
        // 선물 교환
        PT[FI[temp[0]]][FI[temp[1]]] += 1;
    }
    console.log(GI);
    console.log(PT);

    for (let i = 0; i < friends.length; i++) {
        for (let j = i + 1; j < friends.length; j++) {
            if (PT[i][j] !== 0 || PT[j][i] !== 0) {
                if (PT[i][j] !== PT[j][i]) {
                    if (PT[i][j] > PT[j][i]) {
                        answer[i] += 1;
                    } else {
                        answer[j] += 1;
                    }
                } else if (PT[i][j] === PT[j][i]) {
                    if (GI[i] > GI[j]) {
                        answer[i] += 1;
                    } else if (GI[j] > GI[i]) {
                        answer[j] += 1;
                    }
                }
            } else {
                if (GI[i] > GI[j]) {
                    answer[i] += 1;
                } else if (GI[j] > GI[i]) {
                    answer[j] += 1;
                }
            }
        }
    }
    
    console.log(answer);
    return Math.max(...answer);
}