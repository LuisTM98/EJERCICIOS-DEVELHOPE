import { useState } from "react"

function onLogin(data){
    console.log(data)
}

export function LoginForm(){
    const [data, setData] = useState({
        username:'',
        password:'',
        remember: false
    })

    function handleInputChange(event){
        const name = event.target.name;
        const value = event.target.value;
        const isChecked = event.target.checked;
        const type = event.target.type;

        setData((inputLoginData) => {
            const tempObj = {...inputLoginData}
            tempObj[name] = (type === "checkbox" ? isChecked : value)
            return tempObj
        })
    }
    
    function handleLoginClick(event){
        event.preventDefault()
        onLogin(data)   // no hay que añadir una funcion onLogin como prop, porque todo esta en el mismo componente.
    }                   // de estar en otro archivo, si haria falta
    

    function handleReset(){
        setData({
            username:'',
            password:'',
            remember: false
        })
    }

    return (
        <form onSubmit={handleLoginClick}>
            <input type="text" name="username" value={data.username} onChange={handleInputChange}/>
            <input type="password" name="password" value={data.password} onChange={handleInputChange}/>
            <input type="checkbox" name="remember" checked={data.remember} onChange={handleInputChange} /><label>Remember</label>
            <button type="submit" disabled={!data.username || !data.password}>Login</button>
            <button type="button" onClick={handleReset}>Reset</button>
            <br />

            <pre>{JSON.stringify(data, null, 2)}</pre>
        </form>
        )
}

export function UncontrolledLoginForm(){
    
    function submitEventHandler(event){
        event.preventDefault()

        const username = event.target.elements.namedItem('username').value
        const password = event.target.elements.namedItem('password').value
        const remember = event.target.elements.namedItem('remember').checked

        const data = {
            username,
            password,
            remember
        }

        const formData = new FormData(event.target)

        const data2 = {
            username: formData.get('username'),
            password: formData.get('password'),
            remember: formData.get('remember') === 'on' ? true : false,
        }

        console.log(data)
        console.log(data2)
    }
    
    return(
        <form onSubmit={submitEventHandler}>
            <input type="text" name="username"/>
            <input type="password" name="password" />
            <input type="checkbox" name="remember"/>
            <button type="submit" name="login">Login</button>
            <button type="reset" name="reset">Reset</button>
        </form>
    )
}