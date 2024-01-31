import { useHookCurrentLocation } from "./useHookCurrentLocation";

export function HookCurrentLocation(){
    const {currentLocation} = useHookCurrentLocation()
    console.log(currentLocation)
    
    return <div><h1>{currentLocation}, {currentLocation}</h1></div>
}