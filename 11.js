// Find student with highest average marks

let students = {
    A: [80, 90],
    B: [70, 75, 85],
    C: [100, 110, 120],
    D: [50, 60, 70],
}

let highestAverageMarks = 0;
let topScorer = Object.keys(students)[0];
// console.log(topScorer);

for(let key in students) {
    let sum = 0;
    let average;

    for(let i=0; i<students[key].length; i++) {
        // console.log(students[key][i]);
        sum = sum + students[key][i];
    }

    average = sum/students[key].length;

    if(average > highestAverageMarks) {
        highestAverageMarks = average;
        topScorer = key;
    }
}

console.log("The student with the highest average marks is " + topScorer + " with highest average marks = " + highestAverageMarks);