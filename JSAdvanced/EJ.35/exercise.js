function repeatHello(callbackFunc){
    setInterval(callbackFunc, 1000)
}

repeatHello(() => console.log('Hello'))