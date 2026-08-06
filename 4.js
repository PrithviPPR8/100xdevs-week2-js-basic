// Find the largest value key

let obj = {
    a:10,
    b:50,
    c:20
}

let largest = obj.a;
let keyName = "";

for (key in obj) {
    if(obj[key] > largest) {
        largest = obj[key];
        keyName = key;
    }
}

console.log("Largest value key is " + keyName + " and its value is " + largest);


// let largest;
// let keyName;

// for (let key in obj) {
//     if (largest === undefined || obj[key] > largest) {
//         largest = obj[key];
//         keyName = key;
//     }
// }

// console.log(keyName);