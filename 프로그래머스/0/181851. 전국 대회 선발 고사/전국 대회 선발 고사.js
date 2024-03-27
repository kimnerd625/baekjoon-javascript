function solution(rank, attendance) {
    let arr = new Array(rank.length).fill(0);
    
    rank.forEach((el, index) => arr[el-1] += index);
    
    let answer = arr.filter((el, index) => attendance[el]);
    
    return answer[0] * 10000 + answer[1] * 100 + answer[2];
}