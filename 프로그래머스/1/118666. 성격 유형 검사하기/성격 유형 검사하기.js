function solution(survey, choices) {
    let total_points = {"R": 0, "T": 0, "C": 0, "F": 0, "J": 0, "M": 0, "A": 0, "N": 0};
    let answer = [];
    
    survey.forEach((e, i) => {
        let disagree_temp = e[0];
        let agree_temp = e[1];
        
        if (choices[i] > 4) {
            total_points[agree_temp] += choices[i] - 4;
        } else if (choices[i] < 4) {
            total_points[disagree_temp] += 4 - choices[i];
        }
    })
     
    if (total_points["R"] < total_points["T"]) {
        answer.push("T");
    } else {
        answer.push("R");
    }
    
    if (total_points["C"] < total_points["F"]) {
        answer.push("F");
    } else {
        answer.push("C");
    }
    
    if (total_points["J"] < total_points["M"]) {
        answer.push("M");
    } else {
        answer.push("J");
    }
    
    if (total_points["A"] < total_points["N"]) {
        answer.push("N");
    } else {
        answer.push("A");
    }
    
    return answer.join("");
}