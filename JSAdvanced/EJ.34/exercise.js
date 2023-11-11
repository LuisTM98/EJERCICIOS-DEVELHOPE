function callback(){console.log('Hello')}

function printAsyncName(callbackFunc, name){
    setTimeout(callbackFunc, 1000)
    setTimeout(() => console.log(name), 2000)
}

printAsyncName (callback, 'Peter')
