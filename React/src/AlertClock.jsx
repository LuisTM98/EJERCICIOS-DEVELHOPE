export function AlertClock({wasClicked}){
    function handleShowTime(wasClicked){
        const now = new Date()
        if(wasClicked) {
            alert(`The time right now is ${now}`)
        }
    }
    return (
        <button onClick={handleShowTime}>Click me!</button>
    )
}