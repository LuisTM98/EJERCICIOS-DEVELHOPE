import { useEffect, useState } from "react";

export function GitHubUser({ username }) {
  const [data, setData] = useState({ name: "", login: "", avatar: "" });

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        const tempData = {
            name: json.name,
            login: json.login,
            avatar: json.avatar_url
        }
        console.log(tempData)
        setData(tempData)
      });
  }, [username]);

  return (
    <div style={{display:"flex", gap:'5px', alignItems: 'center'}}>
        {data && <h1>{data.name}</h1>}
        {data && <h2>{data.login}</h2>}
        {data && <div><img src={data.avatar} style={{maxHeight: '30px'}}/></div>}
    </div>
  );
}
