const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let totalGradePoints = 0; // 전공평점 총합
let totalCredits = 0; // 총 학점 수

// 인하대 컴퓨터공학과 등급에 따른 과목평점
const gradeScore = {
    "A+": 4.5,
    "A0": 4.0,
    "B+": 3.5,
    "B0": 3.0,
    "C+": 2.5,
    "C0": 2.0,
    "D+": 1.5,
    "D0": 1.0,
    "F": 0.0,
    "P": 0.0 // Pass 과목은 제외
};

for (let i = 0; i < input.length; i++) {
    const [subject, credit, grade] = input[i].trim().split(" ");
    
    if (grade !== "P") { // Pass 과목은 계산에서 제외
        totalGradePoints += gradeScore[grade] * parseFloat(credit);
        totalCredits += parseFloat(credit);
    }
}

const GPA = totalGradePoints / totalCredits;
console.log(GPA.toFixed(6)); // 소수점 아래 6자리까지 출력