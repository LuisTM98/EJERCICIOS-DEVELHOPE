const crypto = require('crypto')

function GenerateRandomID(){
    const RandomID = crypto.randomUUID()
    console.log(RandomID)
    return RandomID
}

GenerateRandomID()