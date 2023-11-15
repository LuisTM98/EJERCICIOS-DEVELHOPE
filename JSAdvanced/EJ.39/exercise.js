const isLogged = true;

function firstPromise(loggedVar){
    return new Promise((resolved, rejected) => {
        setTimeout(() => {
            if (loggedVar === true) {resolved(Math.random())}
            else {rejected(new Error("Is not logged"))}
        }, 1000)
    })
}

function secondPromise(isLoggedResult){
    return new Promise((resolved, rejected) => {
        setTimeout(() => {
            if (isLoggedResult > 0.5) {resolved({name: 'John', age: 24})}
            else {rejected(new Error("Number is below 0.5"))}
        }, 1000) 
    })
}

firstPromise(isLogged)
    .then(secondPromise)
    .then((val) => console.log(val))
    .catch((err) => console.log(err))
    .finally(() => console.log("hope everything worked out!")) //this is the only line I added since I already used the Error class
