import { useState } from "react";
import { Welcome } from "./Welcome";

export function InteractiveWelcome(){

    const [data, setData] = useState({
        leInputName:'',
        leInputAge:''
    })

    function handleInputChange(event){
        const name = event.target.name
        const inputValue = event.target.value

        setData((inputData) => {
            return {...inputData, [name]: inputValue}
        })
        
        console.log(data.leInputName, data.leInputAge)
    }

    function handleWelcomeProps(){

    }

    return (
        <div>
            <input type="text" placeholder="EnterYourNameHere" name='leInputName' value={data.name} onChange={handleInputChange}/>
            <input type="text" placeholder="EnterYourAgeHere" name='leInputAge' value={data.age} onChange={handleInputChange}/>
            <Welcome name={data.leInputName} age={data.leInputAge}/>
        </div>
    )
}