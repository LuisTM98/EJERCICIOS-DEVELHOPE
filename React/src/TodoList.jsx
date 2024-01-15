import { useState } from "react";

export function TodoList() {
  const [inputContent, setInputContent] = useState("");

  function handleInputChange(event) {
    setInputContent(event.target.value);
  }

  const [todosArray, setTodosArray] = useState([
    "Wash the food",
    "Clean the dishes",
    "Sleep",
    "Un-microwave the car",
    "Kill John Connor",
    "Sleep but latter",
  ]);

  function handleFormSubmit(event) {
    event.preventDefault();
    const newTodosArray = [...todosArray, inputContent]
    console.log(newTodosArray)
    setTodosArray(newTodosArray);
  }

  return (
    <div>
      <ul>
        {todosArray.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <form onSubmit={handleFormSubmit}>
        <input type="text" name="addinput" onChange={handleInputChange} />
        <button type="submit">Add to Todo list</button>
      </form>
    </div>
  );
}
