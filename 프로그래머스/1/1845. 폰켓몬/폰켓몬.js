function solution(nums) {
    let getddodaje = parseInt(nums.length / 2);
    let arr = Array.from(new Set(nums));
    return Math.min(getddodaje, arr.length);
}