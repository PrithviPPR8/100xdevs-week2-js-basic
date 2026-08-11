//Convert object to query string

let obj = {
    name: "Alice",
    age: 25
}

let queryString = "";

for(key in obj) {
    queryString += key + "=" + obj[key] + "&";
}

queryString = queryString.slice(0, -1);

console.log(queryString);