function solution(num_list) {
    const result = num_list.reduce((acc, el, index) => {
        if (el < 0) acc.push(index);
        return acc;
    }, []);

    return result.length !== 0 ? parseInt(result) : -1;
}