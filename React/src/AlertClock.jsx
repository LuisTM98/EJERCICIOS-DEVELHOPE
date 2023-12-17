export function AlertClock(){
    function handleShowTime(){
        const now = new Date()
        alert(`The time right now is ${now}`)
    }
    return (
        <button onClick={handleShowTime}>Click me!</button>
    )
}