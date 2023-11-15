const number = 15;

let thePromise = new Promise((resolve, reject) => {
    if(number > 10) {resolve(number)}
    else {reject(number)}
})

thePromise
    .then((val) => console.log(val))
    .catch(() => console.error('Error: number is below 10'))