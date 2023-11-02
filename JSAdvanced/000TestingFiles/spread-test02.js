function sum(...rest){
    return rest.reduce((a,b) => a+b)
}

console.log(sum(1,2,3,4,5))
console.log(sum(1,2,3,4,5,6,7,8,9))

//...rest can be used standalone to refer every and any 
// number of entries or parameters given to a function
//If the function is like reduce, which goes for each
//parameter doing something, the ...rest will make it
//work with any number of parameters given.

//Which actually means, you can do an infinite,
//computer-killing calculate loop?