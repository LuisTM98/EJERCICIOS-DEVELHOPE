export function AlertClock(){
    function showTime(){
        const now = new Date()
        alert(`The time right now is ${now}`)
    }
    return (
        <Button label={'Click me!'} buttonWasClicked={showTime}></Button>
    )
}

// El componente boton usado arriba, es uno definido abajo. AlertClock asigna la funcion showTime a la propiedad buttonWasClicked.
// Dicha propiedad viene establecida en el boton, y esta asignada al evento OnClick.
// El componente App6 llama unicamente a AlertClock, y la propiedad onclick viene asociada directamente al boton

export function Button({buttonWasClicked, label}){
    return <button onClick={buttonWasClicked}>{label}</button>
}