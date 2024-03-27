function solution(num_list) {
    let answer = 0;
    num_list.forEach((el) => {
        while (el !== 1) {
            if (el % 2 === 0) {
                el /= 2;
            } else {
                el = (el - 1) / 2;
            }
            answer += 1;
        }
    })
    return answer;
}