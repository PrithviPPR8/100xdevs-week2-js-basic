// Sort object entries by values (ascending)

let obj = {
    a: 3,
    b: 1,
    c: 2
}

// console.log(Object.entries(obj));

let result = Object.entries(obj).sort((a,b) => a[1] - b[1]);
//if answer of sort is negative -> a comes first
//if answer of sort is positive -> b comes first
//if answer of sort is zero, don't change anything, as equal


console.log(result);