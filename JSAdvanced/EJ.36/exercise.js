function repeatHello(callbackFunc){
    let id = setInterval(callbackFunc, 1000)
    setTimeout(() => clearInterval(id), 1000 * 5)
}

repeatHello(() => console.log('Hello'))