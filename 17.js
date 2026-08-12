// Find common keys between two objects

let obj1 = {
    a:1,
    b:2,
    c:3
}

let obj2 = {
    b:4,
    c:5,
    d:6
}

let commonKeys = [];

for(let key1 in obj1) {
    for(let key2 in obj2) {
        // console.log(key1);
        // console.log(key2);
        if(key1 === key2) {
            commonKeys.push(key1);
        }
    }
}

console.log(commonKeys);