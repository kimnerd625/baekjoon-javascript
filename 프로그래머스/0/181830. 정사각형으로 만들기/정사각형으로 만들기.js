function solution(arr) {
    let width = arr[0].length;
    let height = arr.length;
    if (width > height) {
        for (let i = 1; i <= width - height; i ++) {
            arr.push(new Array(width).fill(0));
        }
    } else {
        arr.forEach((el, index) => arr[index] = el.concat(new Array(height-width).fill(0)));
    }
    
    return arr;
}