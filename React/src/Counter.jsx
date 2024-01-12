import { useEffect, useRef, useState } from "react"
import { CounterDisplay } from "./CounterDisplay"

export function Counter({leProp, initialValue}){
    var leRefCounter = useRef(0)

    const [ counter, setter ] = useState(initialValue)

    useEffect(() => {
        console.log(`The counter value is ${counter}`)
        console.log(leRefCounter)
    }, [counter])
    
    function handleIncrement(){
        setter(counter + 1)  //this has to be a function because the variable cant be updated each time otherwise in React
        leRefCounter.current = 'sum up!'
    }

    function handleDecrement(){
        setter(counter - leProp)
        leRefCounter.current = 'downing!'
    }

    function handleReset(){
        setter(initialValue)
        leRefCounter.current = 'resetting'
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