class Array {
    var1 = 0
    var2 = 0
    var3 = 0
    constructor(var1, var2, var3){
        this.var1 = var1
        this.var2 = var2
        this.var3 = var3
    }
}

let arr1 = new Array(1,2,3)
console.log(arr1)

class Array2 extends Array{
    constructor(textVar, anotherVar, ...rest){
        super(...rest)
        this.textVar = textVar
        this.anotherVar = anotherVar
    }
}

let arr2 = new Array2("caramba", "solo se vive una vez",1,2,3)
console.log(arr2)