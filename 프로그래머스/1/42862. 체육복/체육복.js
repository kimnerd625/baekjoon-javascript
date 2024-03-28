function solution(n, lost, reserve) {
    // 1단계: 자신의 여벌을 사용할 수 있는 학생 제거
    let realLost = lost.filter(l => !reserve.includes(l)).sort((a, b) => a - b);
    let realReserve = reserve.filter(r => !lost.includes(r)).sort((a, b) => a - b);

    let plus = 0;
    realLost.forEach((el) => {
        // 자신에게 빌릴 수 있는 경우
        if (realReserve.includes(el)) {
            plus += 1;
            realReserve = realReserve.filter(item => item !== el);
        }
        // 바로 앞 학생에게 빌릴 수 있는 경우
        else if (realReserve.includes(el - 1)) {
            plus += 1;
            realReserve = realReserve.filter(item => item !== el - 1);
        }
        // 바로 뒤 학생에게 빌릴 수 있는 경우
        else if (realReserve.includes(el + 1)) {
            plus += 1;
            realReserve = realReserve.filter(item => item !== el + 1);
        }
    });
    return n - realLost.length + plus;
}