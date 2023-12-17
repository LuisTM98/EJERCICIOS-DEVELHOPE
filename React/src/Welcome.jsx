export function Welcome({name, age}){
    return (
        <div>
            <p>Welcome, <strong>{name}</strong></p>
            <p>You are {age} years old</p>
        </div>
    )
}

Welcome.defaultProps = {
    name:"[insertar nombre]",
    age:"[insertar edad]"
}

//Asi se definen las propiedades por defecto a ser usadas. En este caso, peticion de insertar la informacion.

