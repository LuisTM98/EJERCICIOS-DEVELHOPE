var fs = require("fs")

const data  = "This text was written with node fs"
fs.writeFile('./NodeJS/EJ.7_NodeProject/WrittenFile.txt', data, (error) => {console.log(error)})