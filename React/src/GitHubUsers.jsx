import { useState } from "react";
import { GitHubUser } from "./GitHubUser";

export function GitHubUsers() {
  const [inputContent, setInputContent] = useState(null);
  const [usersArray, setUsersArray] = useState([]);

  function handleInputChange(event) {
    setInputContent(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (inputContent != "") {
      setUsersArray([...usersArray, inputContent]);
    }
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="user"
          onChange={handleInputChange}
          value={inputContent}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        <ListElement arrayOfUsernames={usersArray}/>
      </ul>
    </div>
  );
}

function ListElement ({arrayOfUsernames}){
    return(
        arrayOfUsernames.map((item, index) => <li key={index}><GitHubUser username={item}/></li>)
    )
}