// Capitalize string values inside object

let obj = {
    name: "alice",
    city: "delhi"
}

for(let key in obj) {
    // console.log(obj[key]);
    // console.log(obj[key][0]);

    obj[key] = obj[key][0].toUpperCase() + obj[key].slice(1);
}

console.log(obj);