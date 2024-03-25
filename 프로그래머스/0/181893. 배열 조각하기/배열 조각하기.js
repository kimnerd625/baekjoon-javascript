function solution(arr, query) {
    query.forEach((el, index) => index % 2 === 0 ? arr = arr.slice(0, el + 1) : arr = arr.slice(el, arr.length));
    return arr;
}