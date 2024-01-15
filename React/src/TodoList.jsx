import { useState } from "react";

export function TodoList() {
  const [inputContent, setInputContent] = useState("");

  function handleInputChange(event) {
    setInputContent(event.target.value);
  }

  const baseTodosArray = [ // Este array contiene las tareas base. Se usa para tener una base no modificable.
    "Wash the food",
    "Eat the dishes",
    "Sleep",
    "Un-microwave the car",
    "Kill John Connor",
    "Sleep but latter",
  ];

  const [todosArray, setTodosArray] = useState(baseTodosArray); // creamos un array seteable cuya base es el array no modificable anterior


  function handleFormSubmit(event) { // Esto ocurre cuando en el input se hace submit

    event.preventDefault(); // para que no haga lo por defecto
    const showedTodosArray = [...todosArray, inputContent];  // se crea un nuevo array, que contenga lo que ya estaba y lo que se escriba en el input
    console.log(showedTodosArray); //for debug
    setTodosArray(showedTodosArray); // se setea el listado segun el nuevo array
    setInputContent(""); // se vacia el input
  }

  function handleFormReset(event) { // Cuando se hace reset
    event.preventDefault(); // para que no haga lo por defecto
    const resetTodosArray = [...baseTodosArray]; // se crea un nuevo array que contenga unicamente lo que contiene el array base
    setTodosArray(resetTodosArray); // se setea el listado segun el nuevo array
    setInputContent("");    // se vacia el input
  }

  function removeTodoFn(indexInArray) {
      // let indexInArray = event.target.parentNode.getAttribute("key")     // usado para acceder a la key. Ya no es necesario.

    // Se pasa el index directamente a la funcion onClick del boton. El boton tiene acceso al index, porque esta dentro del elemento li
    // que devuelve la propia funcion Map. Dicha funcion genera un index. Si estuviera fuera, tendria que acceder al index como prop.
    
    console.log(indexInArray); //para saber que indice tiene cada elemento. unicamente para debug
    const updatedTodosArray = todosArray.filter((item, index) => index !== indexInArray); // =========> // Se crea un nuevo array, filtrado de los elementos con el index indicado.
    setTodosArray(updatedTodosArray) // Se setea el array al updatedArray                               // Como index viene dado en cada caso por su propia posicion, se elimina aquel elemento donde se toca el boton
    setInputContent('') // Se setea a nada el input. Esto en concreto no es necesario como tal en este caso
  }

  return (
    <div>
      <ul>
        {todosArray.map((item, index) => (
          <li key={index}>
            {item}
            <button type="button" onClick={() => removeTodoFn(index)}>
              Remove
            </button>
          </li>
        ))}
      </ul>

      <form onSubmit={handleFormSubmit} onReset={handleFormReset}>
        <input
          type="text"
          name="addinput"
          onChange={handleInputChange}
          value={inputContent}
        />
        <button type="submit">Add to Todo list</button>
        <button type="reset">Reset</button>
      </form>
    </div>
  );
}
