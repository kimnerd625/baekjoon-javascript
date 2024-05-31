function solution(N, stages) {
    let answer = {};
    for (let i = 1; i <= N; i++) {
        let deno = stages.filter((e) => e === i).length; 
        let nume = stages.filter((e) => e >= i).length; 
        if (nume === 0) {
            answer[i] = 0;
        } else {
            answer[i] = deno / nume;
        }
    }

    let sortedArray = Object.keys(answer);

    sortedArray.sort((a, b) => answer[b] - answer[a] || a - b);

    return sortedArray.map(item => parseInt(item));
}