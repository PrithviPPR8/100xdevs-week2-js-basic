//Count number of keys in object

let obj = {
    a:1,
    b:2,
    c:3
}

let countOfKeys = 0;

for(let key in obj){
    countOfKeys += 1;
}

console.log("Number of keys = ", countOfKeys);