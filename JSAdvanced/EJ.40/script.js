async function getInfo (parameter){
    let promise = new Promise (function(resolve, reject) {
        resolve(
            fetch(parameter)
                .then((response) => response.json())
                .then((json) => console.log(json))
        )
    })

    let awaitVar = await promise    // este codigo al parecer
    return awaitVar                 // no hace falta como tal
}

getInfo('https://jsonplaceholder.typicode.com/todos')