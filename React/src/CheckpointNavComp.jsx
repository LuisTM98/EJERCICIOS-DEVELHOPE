import { useState } from "react"

export function CheckpointNavComp(){
    const [leTexto, setLeTexto] = useState('')

    function handleClickEvent(event){
        if(event.target.name === 'home'){
            setLeTexto('Home')
        } else if (event.target.name === 'about') {
            setLeTexto('About us')
        } else {
            setLeTexto('Contact')
        }
    }

    
    return(
        <div>
            <button onClick={handleClickEvent} name="home">Home</button>
            <button onClick={handleClickEvent} name="about">About us</button>
            <button onClick={handleClickEvent} name="contact">Contact</button>

            {leTexto === 'Home' && <div><h1>Home</h1></div>}
            {leTexto === 'About us' && <div><h1>About us</h1></div>}
            {leTexto === 'Contact' && <div><h1>Contact</h1></div>}
        </div>
    )
}

