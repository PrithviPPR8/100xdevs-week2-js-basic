// Convert array of objects to lookup by id

let arr = [
    { id: 101, name: "A" },
    { id: 205, name: "B" },
    { id:1, name:"A" },
    { id:2, name:"B" }
]

let convertedObject = {};

for(let i=0; i<arr.length; i++) {
    // convertedObject[i] = arr[i-1];  //This also works, but not what asked in question. Question says lookup by ID
    convertedObject[arr[i].id] = arr[i];
}

console.log(convertedObject);


// const user = { name: "Alice" };
// const newObject = {};

// newObject.profile = user; // Dot notation