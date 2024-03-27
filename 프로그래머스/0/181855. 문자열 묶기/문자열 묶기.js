function solution(strArr) {
    let maxLength = strArr.reduce((a, b) => a > b.length ? a : b.length, 0);
    let maxValue = 0;
    for (let i = 1; i <= maxLength; i++) {
        let temp = strArr.filter((el) => el.length === i).length;
        if (temp > maxValue) {
            maxValue = temp;
        }
    }
    return maxValue;
}