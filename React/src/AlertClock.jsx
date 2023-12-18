export function AlertClock({onClick}){
    return (
        <Button label={'Click me!'} onClick={onClick}></Button>
    )
}

export function Button({label, onClick}){
    return <button onClick={onClick}>{label}</button>
}