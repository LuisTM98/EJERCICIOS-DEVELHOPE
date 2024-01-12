import { useEffect, useRef } from "react"

export function FocusableInput(){

    const leRef = useRef(null)

    useEffect(() => {
        leRef.current?.focus()
    })

    return(
        <input type="text" ref={leRef}></input>
    )
}