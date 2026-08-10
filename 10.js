// Pick only given keys from object

let obj = {
    name: "Rahul",
    age: 23,
    city: "Noida"
}

let keys = ["name", "city"];

let result = {};

// for(let key in obj) {
//     for(let i=0; i<keys.length; i++) {
//         if(keys[i] === key) {
//             result[key] = obj[key];
//         }
//     }
// }

for (let key in obj) {
    if (keys.includes(key)) {
        result[key] = obj[key];
    }
}

console.log(result);