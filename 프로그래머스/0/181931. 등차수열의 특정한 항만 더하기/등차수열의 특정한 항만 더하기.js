function solution(a, d, included) {
    let = answer = 0;
        
    included.forEach((el, index) => {if (el) {
        answer += a + (index * d);
    }})
    
    return answer;
    
}