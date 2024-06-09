function solution(n, arr1, arr2) {
    let answer = [];
    let changedAnswer = [];
    
    arr1.forEach(el => {
        let temp = el.toString(2).split("").map(Number);
        while (temp.length !== n) {
            temp.unshift(0);
        }
        answer.push(temp);
    })
    
    arr2.forEach((el2, i) => {
        let temp2 = el2.toString(2).split("").map(Number);
        while (temp2.length !== n) {
            temp2.unshift(0);
        }
        temp2.forEach((e, j) => {
            if (e !== 0) {
                answer[i][j] = 1;
            }
        })
    })
    
    answer.forEach((row) => {
        changedAnswer.push(row.map((e) => e == 1 ? "#" : " ").join(""));
    })
    
    return changedAnswer;
}