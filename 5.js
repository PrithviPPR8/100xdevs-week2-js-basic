// Flatten object or arrays into one array

let obj = {
    fruits: ["apple", "banana"],
    veggies: ["carrot", "pea"]
}

let result = [];

for(let key in obj) {
    for(let item of obj[key]) {
        result.push(item);
    }
}

console.log(result);