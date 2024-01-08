import { StrictMode } from "react";
import { AlertClock } from "./AlertClock";
import { Clock } from "./Clock";
import { WelcomeCond } from "./ConditionalWelcome";
import { Counter } from "./Counter";
import { HelloWorld } from "./HelloWorld";
import { Message } from "./Message";
import { Welcome } from "./Welcome";
import { InteractiveWelcome } from "./InteractiveWelcome";

export function App1() {
  return <HelloWorld />;
}

//This now has the message built-in

export function App2() {
  return (
    <div>
      <HelloWorld />
      <HelloWorld />
    </div>
  );
}

// This is the only way I can put two Hello components within App component. it just duplicates.

export function App3() {
  return <Message />;
}

// The browser just renders the message

export function App4() {
  return <Welcome name="Manuel" age={27} />;
}

//Si no pongo los datos, y no hay default props puestas, el mensaje se renderiza incompleto.

export function App5() {
  return <WelcomeCond name="Manuel" age={27} />;
}

export function App6() {
  function showTime() {
    const now = new Date();
    alert(`The time right now is ${now.toLocaleDateString()}`);
  }
  return <AlertClock onClick={showTime} />;
}

export function App7() {
  return <Counter leProp={15} initialValue={0} />;
}

export function App8() {
  return (
    <StrictMode>
      <Clock />
    </StrictMode>
  );
}

export function App9(){
  return(
    <InteractiveWelcome />
  )
}
