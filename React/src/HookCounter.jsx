import { useHookCounter } from "./useHookCounter"

export function HookCounter(){
    const {counter, onIncrement, onDecrement, onReset} = useHookCounter(0)
  
    return (
      <div>
          <h1>{counter}</h1>
          <br />
          <button onClick={onIncrement}>Increment</button>
          <button onClick={onDecrement}>Decrement</button>
          <button onClick={onReset}>Reset</button>
      </div>
  )
}