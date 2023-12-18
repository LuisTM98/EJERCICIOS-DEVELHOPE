import { useEffect, useState } from "react"
import { CounterDisplay } from "./CounterDisplay"

export function Counter({leProp, initialValue}){
    const [ counter, setter ] = useState(initialValue)

    useEffect(() => {
        console.log(`The counter value is ${counter}`)
    }, [counter])
    
    function handleIncrement(){
        setter(counter + 1)  //this has to be a function because the variable cant be updated each time otherwise in React
    }

    function handleDecrement(){
        setter(counter - leProp)
    }

    function handleReset(){
        setter(initialValue)
    }

    return (
        <div>
            <CounterDisplay counterVar={counter}/>
            <button onClick={handleIncrement}>Increment by 1!</button>
            <button onClick={handleDecrement}>Decrement by {leProp}!</button>
            <button onClick={handleReset}>Reset to {initialValue}!</button>
        </div>
    )
}