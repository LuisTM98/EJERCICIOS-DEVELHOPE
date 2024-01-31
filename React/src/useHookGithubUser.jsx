import { useEffect, useState } from "react";

export function useHookGitHubUser(username = "") {
  const [data, setData] = useState({ name: "", login: "", avatar: "" });

  function fetchUser() {
    useEffect(() => {
      fetch(`https://api.github.com/users/${username}`)
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          const tempData = {
            name: json.name,
            login: json.login,
            avatar: json.avatar_url,
          };
          console.log(tempData);
          setData(tempData);
        });
    }, [username]);
  }

  return {data, fetchUser}
}
