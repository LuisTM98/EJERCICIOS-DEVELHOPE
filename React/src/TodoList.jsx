import { useState } from "react";

export function TodoList() {
  const [inputContent, setInputContent] = useState('');

  function handleInputChange(event) {
    setInputContent(event.target.value);
  }

  const baseTodosArray = [
    "Wash the food",
    "Clean the dishes",
    "Sleep",
    "Un-microwave the car",
    "Kill John Connor",
    "Sleep but latter",
  ]

  const [todosArray, setTodosArray] = useState(baseTodosArray);

  function handleFormSubmit(event) {
    event.preventDefault();
    const showedTodosArray = [...todosArray, inputContent]
    console.log(showedTodosArray)  //for debug
    setTodosArray(showedTodosArray);
    setInputContent('')
  }

  function handleFormReset(event){
    event.preventDefault()
    const resetTodosArray = [...baseTodosArray]
    setTodosArray(resetTodosArray)
    setInputContent('')
  }

  return (
    <div>
      <ul>
        {todosArray.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <form onSubmit={handleFormSubmit} onReset={handleFormReset}>
        <input type="text" name="addinput" onChange={handleInputChange} value={inputContent}/>
        <button type="submit">Add to Todo list</button>
        <button type="reset">Reset</button>
      </form>
    </div>
  );
}
