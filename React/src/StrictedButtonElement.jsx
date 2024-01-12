import { useEffect, useRef } from "react";


export function StrictedButtonElement() {
    const leRef2 = useRef(false);
  
    useEffect(() => {
      if (!leRef2.current) {
          leRef2.current = true; //El modo estricto ya esta aplicado a toda la pagina
          console.log("elemento boton ha sido montado");
      } else {
        console.log("elemento boton ha sido desmontaado y montado otra vez");
      }
    });
    return (
      <button type="button" ref={leRef2}>Le Stricted Button</button>
    );
  }