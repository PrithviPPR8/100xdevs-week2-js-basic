// Find student with highest average mark

let marks = {
    A: [80, 90],
    B: [70, 75, 85],
    // C: [100, 110, 120]
}

let highestKey = Object.keys(marks)[0];
let highestAverageMarks = 0;

// console.log(highestKey);

for(let key in marks) {
    // console.log(key);
    // console.log(marks[key]);
    // console.log(marks[key].length);

    let sum = 0;
    

    for(let i=0; i<marks[key].length; i++) {
        sum = sum + marks[key][i];
    }

    // console.log(sum);

    let currentAverageMarks = sum/marks[key].length;
    // console.log(currentAverageMarks);

    if(currentAverageMarks > highestAverageMarks) {
        highestAverageMarks = currentAverageMarks;
        highestKey = key;
    }
}

console.log("The person with higest marks is " + highestKey + " with highest average marks = " + highestAverageMarks);