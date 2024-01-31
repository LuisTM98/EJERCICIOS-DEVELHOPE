import { StrictMode, useState } from "react";
import { AlertClock } from "./AlertClock";
import { Clock } from "./Clock";
import { WelcomeCond } from "./ConditionalWelcome";
import { Counter } from "./Counter";
import { HelloWorld } from "./HelloWorld";
import { Message } from "./Message";
import { Welcome } from "./Welcome";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { LoginForm, UncontrolledLoginForm } from "./LoginForm";
import { FocusableInput } from "./FocusableInput";
import { StrictedButtonElement } from "./StrictedButtonElement";
import { Colors } from "./Colors";
import { TodoList } from "./TodoList";
import { CheckpointNavComp } from "./CheckpointNavComp";
import { Container } from "./Container";
import { LanguageContext } from "./LanguageContext";
import { GitHubUser } from "./GitHubUser";
import { GitHubUsers } from "./GitHubUsers";
import { HookCounter } from "./HookCounter";
import { useHookForm } from "./useHookForm";
import { HookForm } from "./HookForm";

export function CheckpointPractice() {
  return <CheckpointNavComp />;
}

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
  const [lang, selectLang] = useState("en");

  function handleLangSelect(event) {
    console.log(event.target.value);
    selectLang(event.target.value);
  }

  return (
    <StrictMode>
      <select name="lang" onChange={handleLangSelect}>
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>
      <LanguageContext.Provider value={lang}>
        <Clock />
      </LanguageContext.Provider>
    </StrictMode>
  );
}

export function App9() {
  return <InteractiveWelcome />;
}

export function App10() {
  function onLogin(event, data) {
    event.preventDefault();
    console.log(data);
  }
  return (
    <div>
      <LoginForm onLogin={onLogin} />
      <UncontrolledLoginForm />
    </div>
  );
}

export function App11() {
  return (
    <div>
      <FocusableInput />
      <br />
      <StrictMode>
        <StrictedButtonElement />
      </StrictMode>
    </div>
  );
}

export function App12() {
  const colorsArray = [
    { id: 1, name: "red" },
    { id: 2, name: "orange" },
    { id: 3, name: "yellow" },
    { id: 4, name: "green" },
    { id: 5, name: "blue" },
    { id: 6, name: "violet" },
  ];

  return <Colors leColorsArray={colorsArray} />;
}

export function App13() {
  return <TodoList />;
}

export function App14() {
  return (
    <Container title="This is a container title">
      <div>
        <h4>
          This is a container content. I'm passed as a children!! Not like the
          title, which is passed as a string prop.
        </h4>
      </div>
    </Container>
  );
}

export function App15() {
  return <GitHubUser username="ltm98" />;
}

export function App16() {
  return <GitHubUsers />;
}

export function App17() {
  return <HookCounter />;
}

export function App18() {
  return <HookForm />;
}
