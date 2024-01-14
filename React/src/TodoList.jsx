import { useState } from "react"

function ListInput( {todosArray, setTodosArrayFn} ){
    const [inputContent, setInpuntContent] = useState('')

    function handleInputChange(event){
        setInpuntContent(event.target.value)
        console.log(event.target.value)
    }
    
    function handleSubmitEvent(event){
        event.preventDefault()

        const inputContent = event.target.elements.namedItem('addInput').value
        
        setTodosArrayFn(todosArray.push(inputContent))
        console.log(todosArray)
    }
    
    return (
        <form onSubmit={handleSubmitEvent}>
            <input type="text" name="addInput" value={inputContent} onChange={handleInputChange} />
            <button type="submit">Add to Todo List</button>
        </form>
    )
}


export function TodoList({ArrayAsProp}){

const [todosArray, setTodosArray] = useState(ArrayAsProp)

    return(
        <ul>
            {todosArray.map((item, index) => <li key={index}>{item}</li>)}
            <ListInput todosArray={todosArray} setTodosArrayFn={setTodosArray}/>
        </ul>
    )
}