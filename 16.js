//Count even and odd numbers in an array

let arr = [1,2,3,4,5,6];

let even = 0;
let odd = 0;

for(let i=0; i<arr.length; i++) {
    if(i%2 === 0) {
        even += 1;
    } else {
        odd += 1;
    }
}

console.log("Even: " + even + " Odd: " + odd);