function solution(s) {
    const numberWords = {
        "zero": 0,
        "one": 1,
        "two": 2,
        "three": 3,
        "four": 4,
        "five": 5,
        "six": 6,
        "seven": 7,
        "eight": 8,
        "nine": 9
    };
    let answer = [];
    let arr = s.split("");
    let temp = [];
        for (let e of arr) {
        if (!isNaN(e)) {
            answer.push(+e);
            temp = [];  // 숫자가 나오면 temp를 초기화
        } else {
            temp.push(e);
            let word = temp.join("");
            if (numberWords[word] !== undefined) {
                answer.push(numberWords[word]);
                temp = [];  // 영단어를 숫자로 변환한 후 temp를 초기화
            }
        }
    }
    
    return Number(answer.join(""));
}