// Unique values across all object arrays

let obj = {
    x: [1,2,3],
    y: [2,3,4],
    z: [4,5]
}

let uniqueValues = [];

for(let key in obj) {
    // console.log(obj[key]);
    for(let i=0; i<obj[key].length; i++) {
        // console.log(obj[key][i]);
        if(!uniqueValues.includes(obj[key][i])) {
            uniqueValues.push(obj[key][i]);
        }
    }
}

console.log(uniqueValues);