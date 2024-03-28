function solution(number, k) {
    let stack = [];
    for (let num of number) {
        while (k > 0 && stack[stack.length - 1] < num) {
            stack.pop();
            k -= 1;
        }
        stack.push(num);
    }
    
    // k가 남았다면, 그만큼 뒤에서부터 제거
    stack.splice(stack.length - k, k);
    return stack.join("");
}