var fs = require("fs")

const data  = "This text was written with node fs"
fs.writeFile('./NodeJS/EJ.7_NodeProject/Exercises/8_WriteFile/WrittenFile.txt', data, (error) => {console.log(error)})