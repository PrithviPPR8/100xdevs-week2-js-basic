// Sum values in Object arrays

// My Solution

// let expenses = {
//     food: [10, 20, 30],
//     travel: [5,15],
//     bills: [40, 60]
// }

// let food_expenses = 0;
// let travel_expenses = 0;
// let bills_expenses = 0;

// for(let i=0; i < expenses.food.length; i++)
// {
//     food_expenses = food_expenses + expenses.food[i];
// }

// for(let i=0; i< expenses.travel.length; i++)
// {
//     travel_expenses = travel_expenses + expenses.travel[i];
// }

// for(let i=0; i< expenses.bills.length; i++)
// {
//     bills_expenses = bills_expenses + expenses.bills[i];
// }

// let total_expenses = {
//     food: food_expenses,
//     travel: travel_expenses,
//     bills: bills_expenses
// }

// console.log(total_expenses);


// ChatGPT Solution

let expenses = {
    food: [10, 20, 30],
    travel: [5,15],
    bills: [40, 60]
}

let total_expenses = {};

for(let category in expenses) {
    let sum = 0;

    for(let i=0; i< expenses[category].length; i++)
    {
        sum = sum + expenses[category][i];
    }

    total_expenses[category] = sum;
}

console.log(total_expenses);