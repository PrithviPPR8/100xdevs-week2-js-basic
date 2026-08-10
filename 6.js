// Group people by city

let people = [
    { name: "A", city: "Delhi" },
    { name: "B", city: "Mumbai" },
    { name: "C", city: "Delhi" },
]

let result = {};

for(let person of people) {
    if(!result[person.city]) {
        result[person.city] = [];
    }

    result[person.city].push(person.name);
}

console.log(result);

