function solution(myStr) {
    return myStr.split(/[abc]/).filter((el) => el).length !== 0 ? myStr.split(/[abc]/).filter((el) => el) : ["EMPTY"];
}