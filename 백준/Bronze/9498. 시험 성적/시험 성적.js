const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.on('line', function(line) {
    const input = parseInt(line); // line을 정수로 변환하고 input에 저장

    if (input >= 90 && input <= 100) {
        console.log("A");
    } else if (input >= 80) {
        console.log("B");
    } else if (input >= 70) {
        console.log("C");
    } else if (input >= 60) {
        console.log("D");
    } else {
        console.log("F");
    }
    readline.close(); // 프로그램 종료를 위해 readline 인터페이스를 닫습니다.
});