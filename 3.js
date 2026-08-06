//swap keys and values of object

let obj = {
    a: "x",
    b: "y",
    c: "z"
}

let swapped = {};

for (let key in obj) {        //here key is just variable name
    console.log("key=", key);
    console.log("obj[key]=",obj[key]);
    swapped[obj[key]] = key;
}

console.log(swapped);


// let obj2 = {
//     name: "Prithvi",
//     city: "Satara",
//     language: "JavaScript"
// }

// let swapped2 = {};



// for (key in obj2) {
//     console.log(key);
//     console.log(obj2[key]);
//     swapped2[obj2[key]] = key;
// }

// console.log(swapped2);


//For understanding

// let person = {
//     name: "Prithvi",
//     city: "Satara",
//     language: "JavaScript"
// }

// for (let key in person) {
//     console.log(key, person[key]);
// }