function repeatHello(callbackFunc){
    let id = setInterval(callbackFunc, 1000)
}

repeatHello(() => console.log('Hello'))