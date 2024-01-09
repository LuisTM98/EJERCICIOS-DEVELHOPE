import { useState } from "react"

export function LoginForm(onLogin){
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

    
    
    function handleLoginClick(){
        function onLogin(tempData){
            console.log(tempData)
        }
        onLogin(data)
    }

    function handleReset(){
        setData({
            username:'',
            password:'',
            remember: false
        })
    }

    return (
        <div>
            <input type="text" name="username" value={data.username} onChange={handleInputChange}/>
            <input type="password" name="password" value={data.password} onChange={handleInputChange}/>
            <input type="checkbox" name="remember" checked={data.remember} onChange={handleInputChange} /><label>Remember</label>
            <button disabled={!data.username || !data.password} onClick={handleLoginClick}>Login</button>
            <button onClick={handleReset}>Reset</button>
            <br />

            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
        )
}