import { useEffect, useState } from "react"

export function Clock(){
    const [time , setTime ] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date())
            console.log('time updated')
        }, 1000);
        return () => {clearInterval(intervalId)}
    },[])
    return <div><h2>Current time: {time.toLocaleTimeString()}</h2></div>
}