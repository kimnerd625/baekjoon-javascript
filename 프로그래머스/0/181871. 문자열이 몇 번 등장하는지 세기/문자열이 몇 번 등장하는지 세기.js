function solution(myString, pat) {
    let answer = 0;
    while (myString.indexOf(pat) !== -1) {
        myString = myString.substring(myString.indexOf(pat) + 1);
        answer += 1;
    }
    return answer;
}