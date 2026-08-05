// Count word occurences in an array

let fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

let count = {};

for(let i=0; i < fruits.length; i++) {
    let fruit = fruits[i];

    if(count[fruit]) {
        count[fruit] = count[fruit] + 1;
    } else {
        count[fruit] = 1;
    }
}

console.log(count);

