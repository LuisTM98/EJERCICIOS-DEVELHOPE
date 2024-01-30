import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "./LanguageContext";

export function Clock() {
  const [time, setTime] = useState(new Date());

  const lang = useContext(LanguageContext)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
      console.log("time updated");
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);


  return (
      <div>
        <h2>{lang === 'es' ? 'Hora actual:' : 'Current time:'} {time.toLocaleTimeString()}</h2>
      </div>
  );
}
