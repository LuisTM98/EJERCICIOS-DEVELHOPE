async function getInfo(){
    let info = await fetch('https://jsonplaceholder.typicode.com/todos', {method: 'POST'})
    let infoJson = await info.json()
    let {userID, id, title, completed} = infoJson
    console.log(infoJson)
  }

getInfo()

//===========================================================================================

// async function getInfo(){
//     let info = await fetch('https://jsonplaceholder.typicode.com/todos', {method: 'post'})
//                       .then((response) => response.json())
//                       .then((val) => JSON.stringify(val))
//     console.log(info)
//   }

// getInfo()