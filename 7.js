// Filter object by values > 50

let values = {
    a: 20,
    b: 60,
    c: 40,
    d: 90
}

let filteredValues = {};

for(let value in values) {
    // console.log(value);
    // console.log(values[value]);

    if(values[value] > 50) {
        // filteredValues[values[value]] = value;
        filteredValues[value] = values[value];
    }
}

console.log(filteredValues);