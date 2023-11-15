const isLogged = true;

function firstPromise(loggedVar){
    return new Promise((resolved, rejected) => {
        if (loggedVar === true) {resolved(Math.random())}
        else {rejected(new Error("Is not logged"))}
    })
}

function secondPromise(isLoggedResult){
    return new Promise((resolved, rejected) => {
        if (isLoggedResult > 0.5) {resolved({name: 'John', age: 24})}
        else {rejected(new Error("Number is below 0.5"))}
    })
}

firstPromise(isLogged)
    .then(secondPromise)
    .then((val) => console.log(val))
    .catch((err) => console.log(err))

