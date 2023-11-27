const user = {
  id: 1,
  name: "John",
  age: 25,
};

let stringifiedUser = JSON.stringify(user)
console.log(stringifiedUser)

localStorage.setItem(stringifiedUser)

//===============================================================

let gotItem = localStorage.getItem(stringifiedUser)
console.log(gotItem)