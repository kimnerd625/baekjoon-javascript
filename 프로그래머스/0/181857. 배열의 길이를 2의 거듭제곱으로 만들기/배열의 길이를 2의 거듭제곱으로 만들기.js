function solution(arr) {
    let zeroCount = 0;
    for (let i = 0; i <= 10; i++) {
        if (arr.length < 2 ** (i+1) && arr.length >= 2 ** i) {
            if (arr.length === 2 ** i) {
                zeroCount = 0;
            } else {
                zeroCount = 2 ** (i+1) - arr.length;         
            }
        }
    }
    if (zeroCount === 0 ){
        return arr;
    } else {
        return arr.concat(new Array(zeroCount).fill(0));
    }
}