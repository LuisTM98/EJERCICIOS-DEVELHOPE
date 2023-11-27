const user = {
  id: 1,
  name: "John",
  age: 25,
};

let stringifiedUser = JSON.stringify(user)
console.log(stringifiedUser)

localStorage.setItem("userData", stringifiedUser)

//===============================================================

let gotItem = localStorage.getItem("userData")
console.log(gotItem)


const items = {...localStorage}

console.log(items, "items")