import { HelloWorld } from "./HelloWorld";
import { Message } from "./Message";

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
