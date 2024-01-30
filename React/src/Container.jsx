import { useState } from "react"

export function Container ({title, children}){
    const [containerShow, setContainerShow] = useState(false)
    
    function handleTitleClick(){
        setContainerShow((t) => !t)
    }

    return(
        <div style={{backgroundColor: 'white', border:"7px solid red"}}>
            <h1 className="Title" onClick={handleTitleClick}>{title}</h1>
            {containerShow && <div className="children">{children}</div>}
        </div>
    )
}