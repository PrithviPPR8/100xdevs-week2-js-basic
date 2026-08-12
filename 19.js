// Check if all values in object are numbers

let obj = {
    a: 1,
    b: "hello",
    c: 3
}

let areAllNumbers = true;

for(key in obj) {
    if(!Number.isFinite(obj[key])) {
        areAllNumbers = false;
    }
}

console.log(areAllNumbers);

// for(key in obj) {
//     // console.log(obj[key]);
//     if(Number.isFinite(obj[key])) {
//         console.log(true);
//     }
//     else {
//         console.log(false);
//     }
// }

