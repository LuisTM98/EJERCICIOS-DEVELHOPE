/**
 * START: Follow the instructions below.
 */

// Make this identity function generic.
// This should fix the type errors on Line 13 and 15.
// Hint: The type for the `value` function parameter should use a type variable.

function identity<T>(value: T): T {             // The Function has now a type parameter, which is being used by the value, and 
    return value;                               // the function's return
    
}

let value1 = identity<string>("France");

let value2 = identity<number>(67_413_000);

// ----

async function fetchData<Type>(url: string) {
    const response = await fetch(url);
    const responseBody = await response.json();

    return responseBody as Type;
}

interface User {
    name: string;
}

// Pass the `User` type as a type argument to the generic `fetchData()` function.
// This should fix the type error on Line 36.

let user: User = await fetchData("http://api.com/user/1");  // user const is now of type User.

console.log(user.name);

// ----

export {};
