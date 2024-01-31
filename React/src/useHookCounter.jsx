import { useState } from "react";

export function useHookCounter(initialValue) {
  const [counter, setCounter] = useState(initialValue);

  function handleIncrementFunc(event) {
    setCounter((c) => c + 1);
  }

  function handleDecrementFunc(event) {
    setCounter((c) => c - 1);
  }

  function handleResetFunc(event) {
    setCounter(initialValue);
  }

  return {
    counter: counter,
    onIncrement: handleIncrementFunc,
    onDecrement: handleDecrementFunc,
    onReset: handleResetFunc,
  };
}
